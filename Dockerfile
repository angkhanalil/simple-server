FROM node:8-alpine
RUN mkdir /app
COPY *.js /app/
COPY *.json /app/
COPY *.txt /app/

WORKDIR /app
RUN npm install
#expose port 8000
EXPOSE 8000

CMD "node" "app"
