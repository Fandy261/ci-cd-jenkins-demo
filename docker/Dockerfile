# Utilise une image Node.js officielle comme base
FROM node:18

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

# Installation des dépendances
RUN npm install

# Copie du reste de l’application
COPY . .
# Expose le port que ton app utilise (par défaut 3000 ?)
EXPOSE 3000

# Commande pour démarrer l'app
CMD ["npm", "start"]
