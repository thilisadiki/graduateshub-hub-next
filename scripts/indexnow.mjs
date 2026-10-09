#!/usr/bin/env node

/**
 * CLI script to submit URLs to Bing IndexNow.
 * Usage:
 *   npm run indexnow                   (submits sitemap URLs)
 *   npm run indexnow -- /blog/post-1   (submits specific path)
 *   npm run indexnow -- --help         (shows help)
 */

import fs from 'fs';
import path from 'path';

// Read .env.local if present
const envPath = path.resolve(process.cwd(), '.env.local');
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, 'utf-8');
  for (const line of envContent.split('\n')) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const [k, ...v] = trimmed.split('=');
    if (k && v.length > 0 && !process.env[k.trim()]) {
      process.env[k.trim()] = v.join('=').trim().replace(/^["']|["']$/g, '');
    }
  }
}

const DEFAULT_KEY = '3a0d782192dbc45588d6099ffb9fb689';
const HOST = 'www.graduateshub.org';
const SITE_URL = `https://${HOST}`;
const KEY = (process.env.INDEXNOW_KEY || DEFAULT_KEY).trim();
const KEY_LOCATION = `${SITE_URL}/${KEY}.txt`;
const ENDPOINT = 'https://api.indexnow.org/indexnow';

async function fetchSitemapUrls() {
  console.log(`Fetching sitemap from ${SITE_URL}/sitemap.xml ...`);
  try {
    const res = await fetch(`${SITE_URL}/sitemap.xml`, {
      headers: { 'User-Agent': 'GraduatesHub-IndexNow-CLI/1.0' },
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch sitemap.xml: HTTP ${res.status}`);
    }
    const xml = await res.text();
    const matches = Array.from(xml.matchAll(/<loc>(.*?)<\/loc>/g)).map((m) => m[1].trim());
    return matches.filter((u) => u.startsWith('http'));
  } catch (err) {
    console.warn(`Warning: Could not fetch remote sitemap (${err.message}). Using core routes.`);
    return [
      `${SITE_URL}/`,
      `${SITE_URL}/blog`,
      `${SITE_URL}/guides`,
      `${SITE_URL}/career-roadmaps`,
      `${SITE_URL}/interview-prep`,
      `${SITE_URL}/free-ai-career-tools`,
      `${SITE_URL}/portfolio-tasks`,
      `${SITE_URL}/cv-builder`,
    ];
  }
}

async function main() {
  const args = process.argv.slice(2).filter((a) => a !== '--');

  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Bing IndexNow Submitter for Graduates Hub
-----------------------------------------
Usage:
  npm run indexnow                 Submit all canonical URLs from sitemap
  npm run indexnow -- /blog/post   Submit a specific path or URL
  npm run indexnow --url https://...
  npm run indexnow --key           Show current IndexNow configuration

Environment:
  INDEXNOW_KEY  (optional: overrides default key)
`);
    process.exit(0);
  }

  if (args.includes('--key')) {
    console.log(`Host:         ${HOST}`);
    console.log(`Key:          ${KEY}`);
    console.log(`Key Location: ${KEY_LOCATION}`);
    process.exit(0);
  }

  let urls = [];

  const pathArgs = args.filter((a) => !a.startsWith('--'));
  if (pathArgs.length > 0) {
    urls = pathArgs.map((p) => {
      if (p.startsWith('http://') || p.startsWith('https://')) return p;
      const cleanPath = p.startsWith('/') ? p : `/${p}`;
      return `${SITE_URL}${cleanPath}`;
    });
  } else {
    urls = await fetchSitemapUrls();
  }

  // Deduplicate and cap at 10,000 URLs
  const uniqueUrls = Array.from(new Set(urls)).slice(0, 10000);

  if (uniqueUrls.length === 0) {
    console.error('No URLs to submit.');
    process.exit(1);
  }

  console.log(`Submitting ${uniqueUrls.length} URLs to IndexNow (${ENDPOINT}) ...`);
  console.log(`Host: ${HOST}`);
  console.log(`Key:  ${KEY}`);
  console.log(`Sample URLs:`);
  uniqueUrls.slice(0, 5).forEach((u) => console.log(`  - ${u}`));
  if (uniqueUrls.length > 5) {
    console.log(`  ... and ${uniqueUrls.length - 5} more.`);
  }

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: uniqueUrls,
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(payload),
    });

    const status = res.status;
    if (status === 200) {
      console.log(`\nSUCCESS (HTTP 200): All ${uniqueUrls.length} URLs submitted to IndexNow successfully!`);
    } else if (status === 202) {
      console.log(`\nACCEPTED (HTTP 202): URLs received by IndexNow. Key validation in progress.`);
    } else {
      console.error(`\nRESPONSE HTTP ${status}`);
      const bodyText = await res.text();
      if (bodyText) console.error(`Response body: ${bodyText}`);
    }
  } catch (err) {
    console.error(`\nRequest failed: ${err.message}`);
    process.exit(1);
  }
}

main();
