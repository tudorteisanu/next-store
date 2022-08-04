FROM node:16-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY package.json prisma/* ./prisma/

RUN yarn

COPY . .

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN yarn build

RUN yarn global add pm2

RUN ls -la .next/standalone

RUN cp -r .next/standalone/* ./

RUN cp -r codedeploy/* ./

RUN mkdir public/images -p

RUN chmod 0700 ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

CMD ["true"]
