FROM node:14.19-alpine
WORKDIR /app
COPY package.json yarn.lock /app/
RUN yarn install
COPY . /app
EXPOSE 3000
CMD npm run start:prod