// Constants for Enum Values
export const OutputFormat = ['json', 'html', 'csv'] as const;
export const ChromeFlags = [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
] as const;
export const Presets = ['desktop', 'mobile', null] as const;
export const Categories = [
  'performance',
  'accessibility',
  'best-practices',
  'seo',
  'pwa',
  null,
] as const;
export const Audits = [
  'first-contentful-paint',
  'speed-index',
  'largest-contentful-paint',
  'cumulative-layout-shift',
  'total-blocking-time',
  'interactive',
  null,
] as const;
export const SkipAudits = [
  'uses-responsive-images',
  'offscreen-images',
  'unminified-css',
  'unused-css-rules',
  null,
] as const;
