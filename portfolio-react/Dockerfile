FROM node:latest
WORKDIR /app
COPY package*.json .
CMD [ "npm","install" ]
COPY . .
EXPOSE 5000
CMD [ "npm","start" ]
