/**
 * Formats a "Last Updated" date string.
 *
 * If a custom manual string is provided (e.g., "Apr 2026"), it will be returned.
 * If omitted or set to 'auto', it dynamically returns the current month and year (e.g., "Jul 2026").
 */
export function formatLastUpdated(manualDate?: string): string {
  if (manualDate && manualDate.trim() !== '' && manualDate !== 'auto') {
    return manualDate.trim();
  }

  const now = new Date();
  return now.toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });
}
