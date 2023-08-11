import { Schema } from 'mongoose';
import {
  Audits,
  Categories,
  ChromeFlags,
  OutputFormat,
  Presets,
  SkipAudits,
} from '../../../../shared/lighthouseConfig.constant';

export const LighthouseConfigSchema = new Schema({
  url: { type: String, required: true },
  urlAuthKey: String,
  extraHeaders: String,
  outputFormat: { type: [String], enum: OutputFormat, default: ['json'] },
  chromeFlags: { type: [String], enum: ChromeFlags, default: ['--headless'] },
  preset: { type: String, enum: Presets, default: 'mobile' },
  onlyCategories: { type: [String], enum: Categories },
  onlyAudits: {
    type: [String],
    enum: Audits,
    default: ['cumulative-layout-shift'],
  },
  skipAudits: { type: [String], enum: SkipAudits },
  blockUrl: String,
  // ... add any other props you want you can check it with lighthouse-cli --help
});
