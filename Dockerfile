FROM daocloud.io/nginx
COPY ./blog.nginx.conf /etc/nginx/conf.d/
COPY ./dist/ /blog-web/

WORKDIR /blog-web
EXPOSE 8081