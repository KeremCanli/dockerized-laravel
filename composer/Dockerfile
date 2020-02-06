FROM composer
ARG USER_ID=1000
RUN adduser --disabled-password --gecos GECOS --uid ${USER_ID} composer
USER composer
WORKDIR /var/www/html
