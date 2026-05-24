import crypto from 'crypto';

export function signEvaluation(
  proofId: string,
  taskId: string,
  graduateName: string,
  submission: string,
  submissionLinks: string[],
  evaluation: any,
): string {
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY || 'local-fallback-secret-key-123';
  const data = JSON.stringify({
    proofId,
    taskId,
    graduateName,
    submission,
    submissionLinks,
    evaluation,
  });
  return crypto.createHmac('sha256', secret).update(data).digest('hex');
}

export function verifyEvaluation(
  proofId: string,
  taskId: string,
  graduateName: string,
  submission: string,
  submissionLinks: string[],
  evaluation: any,
  signature: string,
): boolean {
  const secret = process.env.SUPABASE_SERVICE_ROLE_KEY || 'local-fallback-secret-key-123';
  const data = JSON.stringify({
    proofId,
    taskId,
    graduateName,
    submission,
    submissionLinks,
    evaluation,
  });
  const expected = crypto.createHmac('sha256', secret).update(data).digest('hex');
  return expected === signature;
}
