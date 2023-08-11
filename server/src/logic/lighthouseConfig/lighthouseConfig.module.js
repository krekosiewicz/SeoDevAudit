"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LighthouseConfigModule = void 0;
const common_1 = require("@nestjs/common");
const lighthouseConfig_service_1 = require("./lighthouseConfig.service");
const lighthouseConfig_controller_1 = require("./lighthouseConfig.controller");
const mongoose_1 = require("@nestjs/mongoose");
const lighthouseConfig_1 = require("../../schemas/lighthouseConfig");
let LighthouseConfigModule = exports.LighthouseConfigModule = class LighthouseConfigModule {
};
exports.LighthouseConfigModule = LighthouseConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: 'LighthouseConfig', schema: lighthouseConfig_1.LighthouseConfigSchema },
            ]),
        ],
        providers: [lighthouseConfig_service_1.LighthouseConfigService],
        controllers: [lighthouseConfig_controller_1.LighthouseConfigController],
    })
], LighthouseConfigModule);
//# sourceMappingURL=lighthouseConfig.module.js.map