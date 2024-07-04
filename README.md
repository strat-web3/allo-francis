# Allo Francis

Testing Twilio integration in Nest.js API. 

## Install

```bash
pnpm i
```

## Run

```bash
pnpm start
```

## Test

```bash
pnpm test
```

End-to-end tests: 

```bash
test:e2e
```

With coverage: 

```bash
pnpm test:cov
```

## Deployment to Jelastic

```
git pull origin main && npm i && npm run build && pm2 restart main
```

### Webhook URL

```
https://allo-francis.jcloud-ver-jpe.ik-server.com/webhook/twilio/incoming-call
```

### Curl

```
curl -X POST https://allo-francis.jcloud-ver-jpe.ik-server.com/webhook/twilio/incoming-call
```

In [Twilio console](https://console.twilio.com/us1/develop/phone-numbers/manage/incoming), click on the phone number and add this URL as a value of `webhook`.

## Call

- Get your phone number whitelisted
- Call this number: **+12202355883**

## Versions

- pnpm `v8.7.5`
- node `v20.9.0`

## Support

You can contact me via [Element](https://matrix.to/#/@julienbrg:matrix.org), [Farcaster](https://warpcast.com/julien-), [Telegram](https://t.me/julienbrg), [Twitter](https://twitter.com/julienbrg), [Discord](https://discordapp.com/users/julienbrg), or [LinkedIn](https://www.linkedin.com/in/julienberanger/).
