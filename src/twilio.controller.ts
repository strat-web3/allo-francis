import { Controller, Post } from '@nestjs/common';
import { TwilioService } from './twilio.service';

@Controller('webhook/twilio')
export class TwilioController {
  constructor(private readonly twilioService: TwilioService) {}

  @Post('incoming-call')
  handleIncomingCall() {
    const twiml = `
      <Response>
        <Dial callerId="${process.env.TWILIO_PHONE_NUMBER}">
          <Number>${process.env.TARGET_PHONE_NUMBER}</Number>
        </Dial>
      </Response>
    `;

    return twiml;
  }
}
