# ================ Stage 1 =================#

# Base image
# FROM public.ecr.aws/bitnami/node:14.18.1-prod as slim
FROM node:14.18.1 as slim

# Create user and group
RUN addgroup app && adduser --system --group app

# Create working directory
WORKDIR /app

# COPY package.json && package-lock.json
COPY package*.json /

# COPY contents to app
COPY . .

# Install npm dependencies
RUN npm install && npm run build-prod


# Set user
USER app

# ================ Stage 2 =================#
FROM node:14.18.1

# Create user and group
RUN addgroup app && adduser --system --group app

# COPY
COPY --from=slim ./app/dist ./dist

COPY package*.json ./

# Install npm dependencies
RUN npm install --only=prod

# Set user
USER app

# Expose Port
EXPOSE 8080

# Execute App
ENTRYPOINT ["npm", "start"]