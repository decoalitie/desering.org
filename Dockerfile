FROM fabiocicerchia/nginx-lua@sha256:4a8872bc8b2d1b1d1d515c9df279a4d1d040c82fb313cbed654e03af664d3491

RUN  mkdir -p /run/nginx
RUN  apk add --no-cache nginx-mod-http-lua-upstream
COPY nginx.default.conf /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY ./_site ./

EXPOSE 5000
