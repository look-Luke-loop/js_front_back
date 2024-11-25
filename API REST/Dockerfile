# Usar imagem oficial do Node.js
FROM node:20.12.1

# Criar e usar diretório de trabalho
WORKDIR /dist/server.js

# Copiar arquivos do projeto
COPY package*.json ./
RUN npm install
COPY . .

# Expor a porta que o servidor escutará
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm","run", "start"]
