FROM ubuntu:20.04
ENV TZ Asia/Dhaka
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update
RUN apt-get install apache2 php libapache2-mod-php -y
RUN service apache2 start 
COPY ./index.php /var/www/html/