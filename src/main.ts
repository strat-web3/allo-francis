import { NestFactory } from '@nestjs/core';
import { TwilioModule } from './twilio.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  try {
    dotenv.config();
    const app = await NestFactory.create(TwilioModule);
    await app.listen(3000);
    return app;
  } catch (error) {
    console.error('Failed to start the application:', error);
    throw error;
  }
}

if (require.main === module) {
  bootstrap().catch((err) => {
    console.error('Failed to start the application:', err);
    process.exit(1);
  });
}

export { bootstrap };
