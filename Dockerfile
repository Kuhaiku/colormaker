# Usa uma imagem leve do Node.js
FROM node:18-alpine

# Define o diretório de trabalho dentro do container
WORKDIR /app

# Copia os arquivos de dependência primeiro (para aproveitar cache do Docker)
COPY package.json package-lock.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código fonte
COPY . .

# Expõe a porta que o app usa
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "start"]