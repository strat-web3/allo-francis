import { NestFactory } from '@nestjs/core';
import { TwilioModule } from './twilio.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(TwilioModule);
  await app.listen(3000);
}
bootstrap();
