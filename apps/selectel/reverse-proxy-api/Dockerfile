# NOTE: Docker image для HelpControl: VDS Selectel API
# NOTE: Stage 1

FROM node:16 as build-stage
# NOTE: Create a Virtual directory inside the docker image
WORKDIR /monorepo

COPY ./*.json .
COPY ./*.js .
COPY ./.* .
COPY ./apps/selectel/reverse-proxy-api ./apps/selectel/reverse-proxy-api

RUN npm install --force

RUN npx nx build selectel-reverse-proxy-api --prod
RUN ls
# NOTE: Stage 2
# FROM node:lts-alpine
FROM node:16-alpine
WORKDIR /usr/src/app

ENV PORT=3333
EXPOSE ${PORT}
# dependencies that nestjs needs
RUN npm install axios express cors

COPY --from=build-stage /monorepo/dist/apps/selectel/reverse-proxy-api .

CMD node ./main.js