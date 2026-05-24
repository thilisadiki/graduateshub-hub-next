import { NextRequest, NextResponse } from 'next/server';
import { getSupabase } from '@/utils/supabase';
import { createRateLimiter, getClientIp } from '@/utils/rateLimit';
import { verifyEvaluation } from '@/utils/signing';

const limiter = createRateLimiter({ max: 5, windowSeconds: 60 });

export async function POST(request: NextRequest) {
  const limited = limiter.check(getClientIp(request));
  if (limited) return limited;

  let proofId: string;
  let taskId: string;
  let taskTitle: string;
  let taskField: string;
  let graduateName: string;
  let submission: string;
  let submissionLinks: string[];
  let evaluation: any;
  let signature: string;

  try {
    const body = await request.json();
    proofId = String(body.proofId || '').trim();
    taskId = String(body.taskId || '').trim();
    taskTitle = String(body.taskTitle || '').trim();
    taskField = String(body.taskField || '').trim();
    graduateName = String(body.graduateName || '').trim();
    submission = String(body.submission || '').trim();
    submissionLinks = Array.isArray(body.submissionLinks) ? body.submissionLinks.map(String) : [];
    evaluation = body.evaluation;
    signature = String(body.signature || '').trim();
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (!proofId || !taskId || !taskTitle || !taskField || !graduateName || !submission || !evaluation || !signature) {
    return NextResponse.json({ error: 'Missing required sync parameters.' }, { status: 400 });
  }

  // Verify the cryptographic HMAC signature to prevent score tampering
  const isValid = verifyEvaluation(
    proofId,
    taskId,
    graduateName,
    submission,
    submissionLinks,
    evaluation,
    signature,
  );

  if (!isValid) {
    return NextResponse.json({ error: 'Invalid signature. Security check failed.' }, { status: 400 });
  }

  try {
    const supabase = getSupabase();
    const { error } = await supabase.from('portfolio_proofs').insert({
      id: proofId,
      task_id: taskId,
      task_title: taskTitle,
      task_field: taskField,
      graduate_name: graduateName,
      submission,
      submission_links: submissionLinks,
      evaluation,
    });
    if (error) throw error;
  } catch (error: any) {
    console.error('Supabase sync insert failed:', error);
    return NextResponse.json(
      { error: 'Database is still down. Please try syncing again later.' },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true, proofUrl: `/proof/${proofId}` });
}
