// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  console.log(process.env.MONGODB_URI, 'dupa');
  const app = await NestFactory.create(AppModule);
  // Enable CORS for the origin from the .env file
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
  });
  await app.listen(3001);
}
bootstrap();
