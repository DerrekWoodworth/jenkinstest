FROM node:latest

WORKDIR /usr/src/app

COPY . .

EXPOSE 80

CMD ["node", "server.js"]
