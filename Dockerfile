# build environment
FROM node:12.14 as builder
RUN npm cache clean --force
RUN mkdir -p /app
WORKDIR /app
COPY package.json /app
RUN npm install
RUN npm install --save-dev @types/file-saver
COPY . /app
RUN export NODE_OPTIONS=--openssl-legacy-provider
RUN npm run build --prod


# production environment
FROM nginx:1.13.9-alpine
COPY --from=builder /app/dist/kripton /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
