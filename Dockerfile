FROM node:17
# set working dir of container to be /app
# default dir
WORKDIR /app 
COPY package.json .
# install dependencies
RUN npm install
# copy all files from current dir to /app
COPY . .
# expose port 3000
EXPOSE 3000
# run the app
CMD ["npm", "start"]