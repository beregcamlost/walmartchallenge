FROM node:14

WORKDIR /app
ARG REACT_APP_URL
ENV REACT_APP_URL=$REACT_APP_URL
COPY . .
RUN npm install
RUN npm run build
RUN npm install -g serve
CMD [ "serve", "-s", "build" ]