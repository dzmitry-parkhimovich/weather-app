FROM node:10 as node

WORKDIR /app
RUN npm install -g create-react-app
COPY package.json yarn.lock ./
RUN yarn install
COPY .env .env
COPY tsconfig.json tsconfig.json
COPY src src
COPY public public
RUN yarn build


FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=node /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
