FROM node

WORKDIR /home/node/app
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 80
