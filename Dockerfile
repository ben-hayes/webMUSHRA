FROM php:7.0-apache
COPY ./ /var/www/html/

COPY ./start-apache.sh /usr/local/bin/
CMD [ "start-apache.sh" ]
