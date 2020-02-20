FROM php:fpm
RUN apt update
RUN apt upgrade -y
RUN apt autoremove -y
RUN apt install -y git
RUN apt install -y unzip
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install pdo_mysql
WORKDIR /usr/local/etc/php
RUN rm php.ini-development
RUN rm php.ini-production
COPY ./php.ini-development ./
COPY ./php.ini-production ./
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'e0012edf3e80b6978849f5eff0d4b4e4c79ff1609dd1e613307e16318854d24ae64f26d17af3ef0bf7cfb710ca74755a') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer
ARG USER_ID=1000
RUN adduser --disabled-password --gecos GECOS --uid ${USER_ID} php-fpm
USER php-fpm
WORKDIR /var/www/html