FROM node:21
MAINTAINER Arsolitt

WORKDIR /home/cache
COPY . .
RUN apt-get update && apt-get install -y \
    nano \
    mc \
    zsh \
    rsync
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
RUN npm install
RUN npm run build
WORKDIR /home/app
EXPOSE 3333