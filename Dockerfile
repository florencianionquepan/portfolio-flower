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

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM node:18-alpine as PRODUCTION_IMAGE
WORKDIR /app 

# Copiar los archivos construidos desde la etapa de construcción
COPY --from=BUILD_IMAGE /app/dist/ /app/dist/

# Exponer el puerto en el que Nginx escuchará
EXPOSE 80
COPY package.json .
COPY vite.config.ts .
RUN npm i typescript

# Comando para iniciar Nginx
CMD ["npm", "run", "preview"]
