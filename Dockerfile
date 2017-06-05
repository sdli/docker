# Statusbar
#
# VERSION    1.0.0

FROM node:latest  

ENV HTTP_PORT 8000

COPY . /app  
WORKDIR /app

RUN npm install --registry=https://registry.npm.taobao.org

EXPOSE 8000

CMD ["npm", "start"]