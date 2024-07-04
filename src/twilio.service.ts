import { Injectable } from '@nestjs/common';

@Injectable()
export class TwilioService {
  handleIncomingCall(): string {
    const twiml = `
      <Response>
        <Say>I just want to say I love you, and I mean it from the bottom of my heart.</Say>
      </Response>
    `;

    return twiml;
  }
}
