import { Injectable } from '@nestjs/common';

@Injectable()
export class TwilioService {
  handleIncomingCall(): string {
    const twiml = `
      <Response>
        <Say>Hello, I love you. Have a nice day.</Say>
      </Response>
    `;

    return twiml;
  }
}
