import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  defaultLighthouseConfig,
  LighthouseConfigDocument,
  LighthouseConfigType,
} from '@schemas/lighthouseConfig';

@Injectable()
export class LighthouseConfigService {
  constructor(
    @InjectModel('LighthouseConfig')
    private readonly configModel: Model<LighthouseConfigDocument>,
  ) {}

  async create(
    createConfigDto: LighthouseConfigType,
  ): Promise<LighthouseConfigDocument> {
    const configWithDefaults = {
      ...defaultLighthouseConfig,
      ...createConfigDto,
    };
    const createdConfig = new this.configModel(configWithDefaults);
    return createdConfig.save();
  }

  async findAll(): Promise<LighthouseConfigType[]> {
    const configDocs = await this.configModel.find().exec();
    return configDocs.map((doc) => doc.toObject() as LighthouseConfigType);
  }
}
