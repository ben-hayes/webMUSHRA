FROM php:7.0-apache
COPY ./ /var/www/html/

ADD login.sh /opt
RUN chmod 755 start-apache.sh
CMD [ "./start-apache.sh" ]
