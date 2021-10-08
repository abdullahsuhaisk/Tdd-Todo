FROM node:alpine

# Add a work directory
WORKDIR /todo-frontend
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .

RUN npm install

# Copy the current directory contents into the container at /client
COPY . .
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start" ]