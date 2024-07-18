FROM quay.io/sampandey001/secktor

RUN git clone https://github.com/Muthee Kingh/K I N G H -MD BOT /root/Muthee Kingh

# Clear npm cache and remove node_modules directories
RUN npm cache clean --force
RUN rm -rf /root/Muthee Kingh/node_modules

# Install dependencies
WORKDIR /root/DeeCeeXxx
RUN npm install

# Add additional Steps To Run...
EXPOSE 3000
CMD ["npm","start" ]
