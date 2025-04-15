FROM node:22.14.0-alpine

WORKDIR /usr/src/app

COPY . .

CMD ["node", "server.js"]
