import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LighthouseConfigModule } from '@logic/index';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGODB_URI),
    LighthouseConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
