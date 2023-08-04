import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ToolConfigModule } from 'src/logic/toolConfig/toolConfig.module';

@Module({
  imports: [ToolConfigModule, MongooseModule.forRoot(process.env.MONGODB_URI)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
