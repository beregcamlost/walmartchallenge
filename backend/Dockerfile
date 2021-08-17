FROM node:14

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN apt update
RUN apt install mongodb-clients -y
RUN ls
CMD [ "node", "src/index.js" ]