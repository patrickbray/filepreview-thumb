FROM node

COPY deb-multimedia.org.list /etc/apt/sources.list.d
RUN apt-get update
RUN apt-get install -y unoconv
RUN apt-get install -y ffmpeg
RUN apt-get install -y imagemagick
RUN apt-get install -y curl
RUN apt-get install -y vim
RUN apt-get install -y ghostscript
RUN mkdir -p /opt/output

WORKDIR /opt/thumb-generator
COPY package*.json ./

RUN npm install
COPY . .

#RUN unoconv --listener

CMD [ "npm", "start" ]
