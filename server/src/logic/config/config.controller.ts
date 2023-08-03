import { Controller, Get } from '@nestjs/common';
import { ConfigService } from 'src/logic/config/config.service';

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  getConfig() {
    return this.configService.getConfig();
  }
}
