FROM node:19.6

ARG WORK_DIR=/frontend

RUN mkdir ${WORK_DIR}
WORKDIR ${WORK_DIR}

# Copy my local files to conatiner
COPY package.json .
COPY package-lock.json .

RUN echo "PATH=/frontend/node_modules/.bin:$PATH" >> /root/.bashrc
RUN npm install -g npm@9.4.2 && \
    npm install

COPY . .

EXPOSE 4200
CMD ng serve
