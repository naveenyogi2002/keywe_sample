# Frontend Dockerfile
FROM node:21 as builder

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.1.0

COPY . .

RUN npm run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
