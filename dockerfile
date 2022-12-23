FROM mcr.microsoft.com/appsvc/node:10-lts
RUN npm install pm2 -g
# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install --silent
RUN npm install react-scripts@3.4.1 -g --silent

# add app
COPY . ./

# start app
CMD ["pm2-runtime", "app.js"]

ENTRYPOINT ["pm2", "start", "--no-daemon", "/opt/startup/default-static-site.js"]