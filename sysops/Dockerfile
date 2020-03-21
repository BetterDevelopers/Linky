# 
FROM node 

# TODO change this to point to opt
RUN mkdir -p linky

# copy contents of the file
COPY . linky

# note that the port should be open on 3000
# this is not a hard requirement, still need
# to explicitly open it on 3000
EXPOSE 3000

# set the working directory upon startup
WORKDIR linky

RUN npm install

# command that will start the app 
ENTRYPOINT ["yarn"]

# arguments provided for the app
CMD ["start"]