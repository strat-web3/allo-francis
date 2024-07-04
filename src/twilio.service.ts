import { Injectable } from '@nestjs/common';

@Injectable()
export class TwilioService {
  handleIncomingCall(): string {
    const twiml = `
      <Response>
        <Say>Hello! This is Francis. I promise I will help you someday.</Say>
      </Response>
    `;

    return twiml;
  }
}
