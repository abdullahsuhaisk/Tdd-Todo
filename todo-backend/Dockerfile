FROM node:alpine

# Set the working directory to /api
WORKDIR /todo-backend

# copy package.json into the container at /api
COPY package.json ./
COPY package-lock.json ./

# install dependencies
RUN npm install

# Copy the current directory contents into the container at /api
COPY ./ ./

# Make port 80 available to the world outside this container
EXPOSE 3001

CMD ["npm", "start"]