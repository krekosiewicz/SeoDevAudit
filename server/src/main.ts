import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Enable CORS for the origin from the .env file
  app.enableCors({
    origin: process.env.CORS_ORIGIN,
  });
  await app.listen(3001);
}
bootstrap();
