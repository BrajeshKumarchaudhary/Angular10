#With Linux Os container

# base Linux OS.
FROM ubuntu:18.04

#Update the System
RUN apt-get update

#install node
RUN apt install nodejs

#install npm
Run apt install npm

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install -g @angular/cli@10.2.0

# add app
COPY . /app

# start app
CMD ng serve --host 0.0.0.0
