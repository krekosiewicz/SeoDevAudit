"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LighthouseConfigService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const lighthouseConfig_1 = require("../../schemas/lighthouseConfig");
let LighthouseConfigService = exports.LighthouseConfigService = class LighthouseConfigService {
    constructor(configModel) {
        this.configModel = configModel;
    }
    async create(createConfigDto) {
        const configWithDefaults = {
            ...lighthouseConfig_1.defaultLighthouseConfig,
            ...createConfigDto,
        };
        const createdConfig = new this.configModel(configWithDefaults);
        return createdConfig.save();
    }
    async findAll() {
        const configDocs = await this.configModel.find().exec();
        return configDocs.map((doc) => doc.toObject());
    }
};
exports.LighthouseConfigService = LighthouseConfigService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('LighthouseConfig')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], LighthouseConfigService);
//# sourceMappingURL=lighthouseConfig.service.js.map