# Step 1: Use Node.js official image for the build process
FROM node:18 AS build

# Step 2: Set the working directory in the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json (or yarn.lock) to the working directory
COPY package.json package-lock.json ./

# Step 4: Install project dependencies
RUN npm install

# Step 5: Copy all files into the container's working directory
COPY . .

# Step 6: Build the React application
RUN npm run build

# Step 7: Set up Nginx to serve the React app
FROM nginx:alpine

# Step 8: Copy the build folder to Nginx's public folder
COPY --from=build /app/build /usr/share/nginx/html

# Step 9: Expose port 80 (default HTTP port)
EXPOSE 80

# Step 10: Start Nginx to serve the app
CMD ["nginx", "-g", "daemon off;"]
