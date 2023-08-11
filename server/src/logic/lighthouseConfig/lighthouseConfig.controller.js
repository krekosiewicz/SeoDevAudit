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
exports.LighthouseConfigController = void 0;
const common_1 = require("@nestjs/common");
const lighthouseConfig_service_1 = require("./lighthouseConfig.service");
let LighthouseConfigController = exports.LighthouseConfigController = class LighthouseConfigController {
    constructor(configService) {
        this.configService = configService;
    }
    async findAll() {
        return this.configService.findAll();
    }
    async addConfig(createConfigDto) {
        return this.configService.create(createConfigDto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], LighthouseConfigController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], LighthouseConfigController.prototype, "addConfig", null);
exports.LighthouseConfigController = LighthouseConfigController = __decorate([
    (0, common_1.Controller)('lighthouseConfig'),
    __metadata("design:paramtypes", [lighthouseConfig_service_1.LighthouseConfigService])
], LighthouseConfigController);
//# sourceMappingURL=lighthouseConfig.controller.js.map