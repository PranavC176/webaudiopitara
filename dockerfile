FROM node:13
WORKDIR /app
COPY . .
RUN npm i
RUN npm build 
CMD [ "npm", "start" ]