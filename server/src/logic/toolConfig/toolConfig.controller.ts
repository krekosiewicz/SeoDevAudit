import { Body, Controller, Get, Post } from '@nestjs/common';
import { ToolConfigService } from 'src/logic/toolConfig/toolConfig.service';
import {
  ConfigDto,
  ToolConfigDocument,
  ToolConfigType,
} from 'src/schemas/toolConfig.type';

@Controller('toolConfig')
export class ToolConfigController {
  constructor(private readonly configService: ToolConfigService) {}

  @Get()
  async findAll(): Promise<ToolConfigType[]> {
    return this.configService.findAll();
  }

  @Post()
  async addConfig(@Body() createConfigDto: ToolConfigType) {
    return this.configService.create(createConfigDto);
  }
}
