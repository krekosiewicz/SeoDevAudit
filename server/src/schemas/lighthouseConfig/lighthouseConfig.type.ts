import { Document } from 'mongoose';

export interface LighthouseConfigType {
  url: string;
  outputFormat?: string[];
  extraHeaders?: string;
  outputPath?: string;
  chromeFlags?: string[];
  preset?: string;
  onlyCategories?: string[];
  onlyAudits?: string[];
  skipAudits?: string[];
  blockUrl?: string;
}

export type LighthouseConfigDocument = LighthouseConfigType & Document;
