import { Controller, Post } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('webhook/twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('incoming-call')
  async handleIncomingCall(): Promise<string> {
    return this.twilioService.handleIncomingCall();
  }
}
