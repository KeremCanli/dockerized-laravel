FROM composer
ARG USER_ID=1000
RUN adduser -D -u ${USER_ID} composer
USER composer
WORKDIR /var/www/html