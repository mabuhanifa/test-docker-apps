FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=nonintereactive
RUN apt-get update && apt-get install \
    apache2 php libapache2-mod-php -y
RUN rm /var/www/html/index.html
COPY ./index.php /var/www/html/
CMD apachectl -D FOREGROUND