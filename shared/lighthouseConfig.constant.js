"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SkipAudits = exports.Audits = exports.Categories = exports.Presets = exports.ChromeFlags = exports.OutputFormat = void 0;
exports.OutputFormat = ['json', 'html', 'csv'];
exports.ChromeFlags = [
    '--headless',
    '--disable-gpu',
    '--no-sandbox',
];
exports.Presets = ['desktop', 'mobile', null];
exports.Categories = [
    'performance',
    'accessibility',
    'best-practices',
    'seo',
    'pwa',
    null,
];
exports.Audits = [
    'first-contentful-paint',
    'speed-index',
    'largest-contentful-paint',
    'cumulative-layout-shift',
    'total-blocking-time',
    'interactive',
    null,
];
exports.SkipAudits = [
    'uses-responsive-images',
    'offscreen-images',
    'unminified-css',
    'unused-css-rules',
    null,
];
//# sourceMappingURL=lighthouseConfig.constant.js.map