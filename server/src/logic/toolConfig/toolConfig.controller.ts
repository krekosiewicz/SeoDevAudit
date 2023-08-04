import { Body, Controller, Get, Post } from '@nestjs/common';
import { ToolConfigService } from 'src/logic/toolConfig/toolConfig.service';
import {
  ConfigDto,
  ToolConfigDocument,
  ToolConfigType,
} from 'src/schemas/toolConfig.type';

@Controller('config')
export class ToolConfigController {
  constructor(private readonly configService: ToolConfigService) {}

  @Get()
  getConfig() {
    return this.configService.getConfig();
  }

  @Get('findAll')
  async findAll(): Promise<ToolConfigType[]> {
    return this.configService.findAll();
  }

  @Post()
  async addConfig(@Body() createConfigDto: ToolConfigType) {
    return this.configService.create(createConfigDto);
  }
}
