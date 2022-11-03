FROM node:18-alpine

RUN mkdir -p /backend/

WORKDIR /backend/

COPY package*.json ./

RUN npm install --omit=dev

COPY . .

EXPOSE 3000

CMD npm run prod
