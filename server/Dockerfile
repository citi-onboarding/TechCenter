FROM node:latest

RUN mkdir /server
WORKDIR /server

COPY package.json /server
COPY yarn.lock /server

RUN yarn install

COPY . /server

CMD ["yarn", "run", "dev"]
EXPOSE 3001