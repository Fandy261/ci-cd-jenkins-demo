# Utilise une image Node.js officielle comme base
FROM node:18

# Dossier de travail dans le conteneur
WORKDIR /app

# Copie des fichiers package.json et package-lock.json
COPY package*.json ./

#copie du fichier .env pour l'utiliser en local mais en temps normal, il ne faut pas copier .env
COPY .env .env

# Installation des dépendances
RUN npm install

# Copie du reste de l’application
COPY . .
# Expose le port que ton app utilise (par défaut 3000 ?)
EXPOSE 3000

# Commande pour démarrer l'app
CMD ["npm", "start"]
