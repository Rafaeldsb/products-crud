FROM node:latest

ADD setup.sh /setup.sh
RUN chmod 755 /setup.sh
RUN npm i -g nodemon
RUN npm install --save-dev jest
RUN npm install supertest --save-dev
CMD ["/setup.sh"]

