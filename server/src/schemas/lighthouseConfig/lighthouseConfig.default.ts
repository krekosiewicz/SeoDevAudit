import { LighthouseConfigType } from './lighthouseConfig.type';

export const defaultLighthouseConfig: LighthouseConfigType = {
  url: '', // This should be replaced with a valid URL
  outputFormat: ['json'],
  chromeFlags: ['--headless'],
  preset: 'mobile',
  onlyAudits: ['cumulative-layout-shift'],
};
