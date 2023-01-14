FROM node:19-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json ./
COPY package-lock.json ./

RUN npm install
RUN npm -g install react-scripts
RUN npm -g install serve

COPY . ./

RUN npm run build

EXPOSE 3000:3000

CMD ["serve", "-s", "build/"]
