# Usa una imagen base de Node.js
FROM node:14

WORKDIR /app

COPY package*.json /app

RUN npm install

COPY . /app

EXPOSE 3001

CMD ["node", "src/app.js"]