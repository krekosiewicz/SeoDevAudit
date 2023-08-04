import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ToolConfigDocument,
  ToolConfigType,
} from 'src/schemas/toolConfig.type';

@Injectable()
export class ToolConfigService {
  constructor(
    @InjectModel('Config')
    private readonly configModel: Model<ToolConfigDocument>,
  ) {}

  async create(createConfigDto: ToolConfigType): Promise<ToolConfigDocument> {
    const createdConfig = new this.configModel(createConfigDto);
    return createdConfig.save();
  }

  getConfig() {
    return [
      { id: 1, title: 'Post Title', description: 'Post Description' },
      { id: 2, title: 'Post Title2', description: 'Post Description2' },
    ];
  }
  async findAll(): Promise<ToolConfigType[]> {
    const configDocs = await this.configModel.find().exec();
    return configDocs.map((doc) => doc.toObject() as ToolConfigType);
  }
}
