FROM alpine:3.21 AS builder

WORKDIR /app

COPY . .
RUN mkdir -p /dist && cp -r index.html src /dist/

FROM nginx:1.27-alpine AS runtime

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
