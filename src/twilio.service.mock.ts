export class MockTwilioService {
  handleIncomingCall(): string {
    return `
        <Response>
          <Say>Hello! This is Francis. I promise I will help you someday.</Say>
        </Response>
      `;
  }
}
