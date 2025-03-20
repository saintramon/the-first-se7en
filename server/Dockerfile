FROM node:18-alpine

WORKDIR /var/www/html

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g nodemon

COPY . .

EXPOSE 8080

CMD ["npm", "run", "dev"]