"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LighthouseConfigSchema = void 0;
const mongoose_1 = require("mongoose");
const lighthouseConfig_constant_1 = require("../../../../shared/lighthouseConfig.constant");
exports.LighthouseConfigSchema = new mongoose_1.Schema({
    url: { type: String, required: true },
    urlAuthKey: String,
    extraHeaders: String,
    outputFormat: { type: [String], enum: lighthouseConfig_constant_1.OutputFormat, default: ['json'] },
    chromeFlags: { type: [String], enum: lighthouseConfig_constant_1.ChromeFlags, default: ['--headless'] },
    preset: { type: String, enum: lighthouseConfig_constant_1.Presets, default: 'mobile' },
    onlyCategories: { type: [String], enum: lighthouseConfig_constant_1.Categories },
    onlyAudits: {
        type: [String],
        enum: lighthouseConfig_constant_1.Audits,
        default: ['cumulative-layout-shift'],
    },
    skipAudits: { type: [String], enum: lighthouseConfig_constant_1.SkipAudits },
    blockUrl: String,
});
//# sourceMappingURL=lighthouseConfig.schema.js.map