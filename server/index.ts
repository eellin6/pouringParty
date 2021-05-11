import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as Express from 'express';
import { resolve } from 'path';

async function bootstrap() {
  const PORT: String | Number = 8080;
  const dist = resolve(__dirname, '..', 'dist');

  const app = await NestFactory.create(AppModule);

  app.use('/', Express.static(dist));
  await app.listen(<any>PORT, () => console.info(`listening on port http://127.0.0.1:${PORT}`));
}

bootstrap();
