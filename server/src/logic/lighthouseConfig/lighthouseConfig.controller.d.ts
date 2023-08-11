import { LighthouseConfigService } from 'src/logic/lighthouseConfig/lighthouseConfig.service';
import { LighthouseConfigType } from '@schemas/lighthouseConfig';
export declare class LighthouseConfigController {
    private readonly configService;
    constructor(configService: LighthouseConfigService);
    findAll(): Promise<LighthouseConfigType[]>;
    addConfig(createConfigDto: LighthouseConfigType): Promise<import("@schemas/lighthouseConfig").LighthouseConfigDocument>;
}
