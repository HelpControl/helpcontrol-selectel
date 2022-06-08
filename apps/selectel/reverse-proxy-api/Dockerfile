# NOTE: Docker image для HelpControl: VDS Selectel API
# NOTE: Stage 1

FROM node:16-alpine as build-stage
# NOTE: Create a Virtual directory inside the docker image
WORKDIR /monorepo

RUN npm install
RUN npx nx build --prod selectel-reverse-proxy-api

# NOTE: Stage 2
# FROM node:lts-alpine
FROM node:16-alpine
WORKDIR /usr/src/app

ENV PORT=3333
EXPOSE ${PORT}
# dependencies that nestjs needs
RUN npm install axios express cors

COPY --from=build-stage /monorepo/dist/apps/selectel-reverse-proxy-api .

CMD node ./main.js