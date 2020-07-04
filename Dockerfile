FROM node:12.17
RUN mkdir -p /usr/app
WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm test && npm run build
EXPOSE 8080
CMD ["npm","start"]
