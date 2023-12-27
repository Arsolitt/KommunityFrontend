FROM node:21
MAINTAINER Arsolitt
EXPOSE 3333
ARG UID
ARG GID
ENV UID=${UID}
ENV GID=${GID}
RUN apt-get update && apt-get install -y \
    nano \
    mc \
    zsh \
    rsync
RUN usermod -u $UID node \
  && groupmod -g $GID node
USER 1000
RUN sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
WORKDIR /home/app
COPY . .
CMD npm ci && npm run dev