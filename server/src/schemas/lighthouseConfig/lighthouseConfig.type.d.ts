import { Document } from 'mongoose';
import { Audits, Categories, ChromeFlags, OutputFormat, Presets, SkipAudits } from 'src/schemas/lighthouseConfig/lighthouseConfig.constant';
export interface LighthouseConfigType {
    url: string;
    extraHeaders?: string;
    outputPath?: string;
    outputFormat?: (typeof OutputFormat)[number][];
    chromeFlags?: (typeof ChromeFlags)[number][];
    preset?: (typeof Presets)[number];
    onlyCategories?: (typeof Categories)[number][];
    onlyAudits?: (typeof Audits)[number][];
    skipAudits?: (typeof SkipAudits)[number][];
    blockUrl?: string;
}
export type LighthouseConfigDocument = LighthouseConfigType & Document;
