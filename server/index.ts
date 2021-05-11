import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const PORT: String | Number = 8080;

  const app = await NestFactory.create(AppModule);
  await app.listen(<any>PORT, () => console.info(`listening on port http://127.0.0.1:${PORT}`));
}

bootstrap();
