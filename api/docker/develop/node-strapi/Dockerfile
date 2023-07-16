FROM node:16-alpine
# Installing libvips-dev for sharp Compatibility
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev nasm bash vips-dev

WORKDIR /app/

COPY ./strapi/package.json ./
COPY ./strapi/package-lock.json ./

ENV PATH /app/node_modules/.bin:$PATH

RUN npm install

COPY ./strapi/. ./strapi

WORKDIR ./strapi

RUN npm run build

ARG NODE_ENV=development

ENV NODE_ENV=${NODE_ENV}

EXPOSE 1337

CMD ["npm","run","develop"]