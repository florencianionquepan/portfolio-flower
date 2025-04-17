# Etapa de construcción
FROM node:18 AS BUILD_IMAGE

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de proyecto
COPY package*.json ./

# Instalar dependencias
RUN npm install

# COPY REMAINING FILES
COPY . .
COPY .env .env

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app 

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=BUILD_IMAGE /app/dist/ /app/dist/
COPY package.json ./

RUN npm install -g serve

EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "80"]
