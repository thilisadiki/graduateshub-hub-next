export const SITE_URL = 'https://www.graduateshub.org';
export const SITE_NAME = 'Graduates Hub';

export const OG_IMAGE = {
  url: '/graduates-hub-logo.png',
  width: 1200,
  height: 630,
};

export function getCleanCourseUrl(rawUrl?: string): string | undefined {
  if (!rawUrl) return undefined;
  return rawUrl.replace(/[?&]utm_source=alison_user.*$/, '');
}

export function resolveCourseProvider(rawUrl?: string) {
  const link = rawUrl || '';
  if (link.includes('training.fema.gov')) return { '@type': 'Organization', name: 'FEMA Emergency Management Institute', sameAs: 'https://training.fema.gov' };
  if (link.includes('cisa.gov') || link.includes('niccs')) return { '@type': 'Organization', name: 'Cybersecurity and Infrastructure Security Agency (CISA)', sameAs: 'https://www.cisa.gov' };
  if (link.includes('cdc.gov')) return { '@type': 'Organization', name: 'Centers for Disease Control and Prevention (CDC)', sameAs: 'https://www.cdc.gov' };
  if (link.includes('osha.gov')) return { '@type': 'Organization', name: 'Occupational Safety and Health Administration (OSHA)', sameAs: 'https://www.osha.gov' };
  if (link.includes('sba.gov')) return { '@type': 'Organization', name: 'U.S. Small Business Administration (SBA)', sameAs: 'https://www.sba.gov' };
  if (link.includes('state.gov')) return { '@type': 'Organization', name: 'U.S. Department of State', sameAs: 'https://www.state.gov' };
  if (link.includes('fai.gov')) return { '@type': 'Organization', name: 'Federal Acquisition Institute (FAI)', sameAs: 'https://www.fai.gov' };
  if (link.includes('cancer.gov') || link.includes('nih.gov')) return { '@type': 'Organization', name: 'National Institutes of Health (NIH)', sameAs: 'https://www.nih.gov' };
  if (link.includes('thensg.gov.za')) return { '@type': 'Organization', name: 'National School of Government (NSG)', sameAs: 'https://www.thensg.gov.za' };
  if (link.includes('nyda.gov.za')) return { '@type': 'Organization', name: 'National Youth Development Agency (NYDA)', sameAs: 'https://www.nyda.gov.za' };
  if (link.includes('nemisa.co.za')) return { '@type': 'Organization', name: 'NEMISA', sameAs: 'https://www.nemisa.co.za' };
  if (link.includes('mlab.co.za')) return { '@type': 'Organization', name: 'mLab South Africa', sameAs: 'https://mlab.co.za' };
  if (link.includes('mict.org.za')) return { '@type': 'Organization', name: 'MICT SETA', sameAs: 'https://www.mict.org.za' };
  if (link.includes('fasset.org.za')) return { '@type': 'Organization', name: 'FASSET', sameAs: 'https://www.fasset.org.za' };
  if (link.includes('google.com') || link.includes('grow.google')) return { '@type': 'Organization', name: 'Google', sameAs: 'https://grow.google' };
  if (link.includes('microsoft.com')) return { '@type': 'Organization', name: 'Microsoft', sameAs: 'https://learn.microsoft.com' };
  if (link.includes('alison.com')) return { '@type': 'Organization', name: 'Alison', sameAs: 'https://alison.com' };
  return { '@type': 'Organization', name: 'Graduates Hub', sameAs: 'https://www.graduateshub.org' };
}
