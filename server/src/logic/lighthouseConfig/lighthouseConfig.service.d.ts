import { Model } from 'mongoose';
import { LighthouseConfigDocument, LighthouseConfigType } from '@schemas/lighthouseConfig';
export declare class LighthouseConfigService {
    private readonly configModel;
    constructor(configModel: Model<LighthouseConfigDocument>);
    create(createConfigDto: LighthouseConfigType): Promise<LighthouseConfigDocument>;
    findAll(): Promise<LighthouseConfigType[]>;
}
