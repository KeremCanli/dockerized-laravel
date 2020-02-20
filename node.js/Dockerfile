FROM node
RUN deluser --remove-home node
ARG USER_ID=1000
RUN adduser --disabled-password --force-badname --gecos GECOS --uid ${USER_ID} node.js
USER node.js
WORKDIR /home/node.js/node.js-project