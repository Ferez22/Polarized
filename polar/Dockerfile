FROM node:12 AS builder
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx:latest AS prod-stage
# WORKDIR /usr/share/nginx/html
COPY --from=builder /app/dist/polar /usr/share/nginx/html
EXPOSE 80