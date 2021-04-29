FROM php:7.0-apache
COPY ./ /var/www/html/

ADD start-apache.sh /opt
RUN chmod 755 start-apache.sh
CMD [ "./start-apache.sh" ]
