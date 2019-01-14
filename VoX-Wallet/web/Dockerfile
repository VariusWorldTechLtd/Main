FROM node:8 AS build-machine
 
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production
COPY . .
RUN npm run build

FROM nginx:latest
# Bundle app source
COPY --from=build-machine /usr/src/app/dist /usr/share/nginx/html

EXPOSE 80