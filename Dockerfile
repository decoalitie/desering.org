FROM fabiocicerchia/nginx-lua

RUN  mkdir -p /run/nginx
RUN  apk add --no-cache nginx-mod-http-lua-upstream
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY ./_site ./

EXPOSE 5000
