import { Injectable, Logger } from '@nestjs/common';
import * as Twilio from 'twilio';

@Injectable()
export class TwilioService {
  private client: Twilio.Twilio;

  constructor() {
    this.client = Twilio(
      process.env.TWILIO_ACCOUNT_SID,
      process.env.TWILIO_AUTH_TOKEN,
    );
  }

  async makeCall(to: string, from: string, url: string) {
    try {
      await this.client.calls.create({
        to,
        from,
        url,
      });
    } catch (error) {
      Logger.error(
        `Error making Twilio call to ${to} from ${from}: ${error.message}`,
        error.stack,
        'TwilioService',
      );
      throw new Error(`Twilio API Error: ${error.message}`);
    }
  }
}
