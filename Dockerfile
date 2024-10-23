# Use uma imagem base com Node.js
FROM node:18-alpine

# Defina o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copie o package.json e o package-lock.json (se existir)
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie o restante do código da aplicação para o diretório de trabalho
COPY . .

# Exponha a porta que a aplicação irá rodar (a mesma definida no seu projeto)
EXPOSE 3000

# Comando para iniciar a aplicação NestJS
CMD ["npm", "run", "start:prod"]
