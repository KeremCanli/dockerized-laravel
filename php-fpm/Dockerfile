FROM php:fpm
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install pdo_mysql
WORKDIR /usr/local/etc/php
RUN rm php.ini-development
RUN rm php.ini-production
COPY ./php.ini-development ./
COPY ./php.ini-production ./
ARG USER_ID=1000
RUN adduser --disabled-password --gecos GECOS --uid ${USER_ID} php-fpm
USER php-fpm
WORKDIR /var/www/html
