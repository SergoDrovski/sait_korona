FROM node:18-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app/

COPY ./next/package.json ./
COPY ./next/package-lock.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY ./next/. ./next

WORKDIR ./next

EXPOSE 3000

CMD ["npm","run","dev","-H 127.0.0.1"]