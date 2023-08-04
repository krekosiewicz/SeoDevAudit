import { Module } from '@nestjs/common';
import { LighthouseConfigService } from 'src/logic/lighthouseConfig/lighthouseConfig.service';
import { LighthouseConfigController } from 'src/logic/lighthouseConfig/lighthouseConfig.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LighthouseConfigSchema } from '@schemas/lighthouseConfig';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'LighthouseConfig', schema: LighthouseConfigSchema },
    ]),
  ],
  providers: [LighthouseConfigService],
  controllers: [LighthouseConfigController],
})
export class LighthouseConfigModule {}
