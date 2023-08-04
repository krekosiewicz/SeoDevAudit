import { Body, Controller, Get, Post } from '@nestjs/common';
import { LighthouseConfigService } from 'src/logic/lighthouseConfig/lighthouseConfig.service';
import { LighthouseConfigType } from '@schemas/lighthouseConfig';

@Controller('lighthouseConfig')
export class LighthouseConfigController {
  constructor(private readonly configService: LighthouseConfigService) {}

  @Get()
  async findAll(): Promise<LighthouseConfigType[]> {
    return this.configService.findAll();
  }

  @Post()
  async addConfig(@Body() createConfigDto: LighthouseConfigType) {
    return this.configService.create(createConfigDto);
  }
}
