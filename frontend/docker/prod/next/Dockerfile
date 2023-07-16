FROM node:18-alpine

RUN apk add --no-cache libc6-compat

WORKDIR ./next

COPY ./next ./

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm","run","start","-H 127.0.0.1"]