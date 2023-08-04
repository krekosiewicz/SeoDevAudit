// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import * as moduleAlias from 'module-alias';
moduleAlias.addAlias('@schemas', __dirname + '/schemas');
moduleAlias.addAlias('@logic', __dirname + '/logic');

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
