FROM php:fpm
RUN apt-get update
RUN apt-get autoremove -y
RUN apt-get install -y unzip
RUN apt-get install -y git
RUN docker-php-ext-install bcmath
RUN docker-php-ext-install pdo_mysql
WORKDIR /usr/local/etc/php
RUN rm php.ini-development
RUN rm php.ini-production
COPY ./php.ini-development ./
COPY ./php.ini-production ./
WORKDIR /home/php-fpm
RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php -r "if (hash_file('sha384', 'composer-setup.php') === 'c5b9b6d368201a9db6f74e2611495f369991b72d9c8cbd3ffbc63edff210eb73d46ffbfce88669ad33695ef77dc76976') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php
RUN php -r "unlink('composer-setup.php');"
RUN mv composer.phar /usr/local/bin/composer
RUN chmod 777 -R /root/.composer
RUN mv /root/.composer ./
ARG USER_ID=1000
ARG GROUP_ID=1000
RUN groupadd -g ${GROUP_ID} php-fpm
RUN useradd -l -u ${USER_ID} -g php-fpm php-fpm
USER php-fpm
WORKDIR /var/www/html