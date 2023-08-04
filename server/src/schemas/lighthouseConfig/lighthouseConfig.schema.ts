import { Schema } from 'mongoose';

export const LighthouseConfigSchema = new Schema({
  url: { type: String, required: true },
  urlAuthKey: String,
  outputFormat: {
    type: [String],
    enum: ['json', 'html', 'csv'],
    default: ['json'],
  },
  extraHeaders: String,
  chromeFlags: {
    type: [String],
    enum: ['--headless', '--disable-gpu', '--no-sandbox'],
    default: ['--headless'],
  },
  preset: {
    type: String,
    enum: ['desktop', 'mobile', null],
    default: 'mobile',
  },
  onlyCategories: {
    type: [String],
    enum: [
      'performance',
      'accessibility',
      'best-practices',
      'seo',
      'pwa',
      null,
    ],
  },
  onlyAudits: {
    type: [String],
    enum: [
      'first-contentful-paint',
      'speed-index',
      'largest-contentful-paint',
      'cumulative-layout-shift',
      'total-blocking-time',
      'interactive',
      null,
    ],
    default: ['cumulative-layout-shift'],
  },
  skipAudits: {
    type: [String],
    enum: [
      'uses-responsive-images',
      'offscreen-images',
      'unminified-css',
      'unused-css-rules',
      null,
    ],
  },
  blockUrl: String,
  // ... add any other props you want you can check it with lighthouse-cli --help
});
