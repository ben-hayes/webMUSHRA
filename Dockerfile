FROM php:7.0-apache
COPY ./ /var/www/html/

COPY ./run-apache2.sh /usr/local/bin/
CMD [ "run-apache2.sh" ]
