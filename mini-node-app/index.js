require('dotenv').config(); // Charge les variables du .env

const express = require('express');
const app = express();

// Récupère le port depuis .env, ou 3000 par défaut
const port = process.env.PORT || 3000;
const appName = process.env.APP_NAME || 'ci-cd-jenkins-demo';

app.get('/', (req, res) => {
  res.send(`Bienvenue sur ${appName} 🚀`);
});

app.listen(port, () => {
  console.log(`My app ${appName} is running on http://localhost:${port}`);
});

