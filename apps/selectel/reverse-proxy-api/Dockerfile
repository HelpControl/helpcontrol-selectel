# NOTE: Docker image для HelpControl: VDS Selectel API
# FROM node:lts-alpine
FROM node:16-alpine
WORKDIR /app

ENV PORT=3333
EXPOSE ${PORT}
# dependencies that nestjs needs
RUN npm install axios express cors
# RUN npm install --production

COPY ./dist/apps/selectel/reverse-proxy-api .

CMD node ./main.js