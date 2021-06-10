FROM node:latest

RUN mkdir /source
WORKDIR /source

COPY package.json /source

RUN yarn install

COPY . /source

CMD ["yarn", "start"]

EXPOSE 3000 