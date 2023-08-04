import { Module } from '@nestjs/common';
import { ToolConfigService } from 'src/logic/toolConfig/toolConfig.service';
import { ToolConfigController } from 'src/logic/toolConfig/toolConfig.controller';
import { ToolConfigSchema } from 'src/schemas/toolConfig.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Config', schema: ToolConfigSchema }]),
  ],
  providers: [ToolConfigService],
  controllers: [ToolConfigController],
})
export class ToolConfigModule {}
