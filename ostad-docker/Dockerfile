FROM ubuntu:20.04
ARG DEBIAN_FRONTEND=nonintereactive
RUN apt-get update && apt-get install \
    apache2 php libapache2-mod-php -y
RUN service apache2 start 
COPY ./index.php /var/www/html/