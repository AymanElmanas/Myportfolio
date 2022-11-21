FROM node:latest
WORKDIR /usr/src/app
COPY package*.json ./
CMD [ "npm","i" ]
COPY . .
EXPOSE 3000
CMD [ "npm","start" ]