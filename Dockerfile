FROM node:21-bookworm-slim as builder
WORKDIR /home/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:1.23-alpine
WORKDIR /usr/share/nginx/html
COPY --from=builder /home/app/dist .
EXPOSE 80