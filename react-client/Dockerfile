FROM node:10

# Creating app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
COPY . ./
RUN npm install

CMD ["npm", "start"]
