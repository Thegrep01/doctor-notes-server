import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap(): Promise<void> {
  // tslint:disable-next-line: no-any
  const app: any = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
