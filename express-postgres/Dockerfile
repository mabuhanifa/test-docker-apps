FROM node:18

WORKDIR /express-postgress

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "./node_modules/.bin/nodemon", "--config", "nodemon.json", "index.js" ]