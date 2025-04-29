require('dotenv').config();

const express = require('express');
const app = express();

const appName = process.env.APP_NAME || 'ci-cd-jenkins-demo';

app.get('/', (req, res) => {
  res.send(`Bienvenue sur ${appName} 🚀`);
});

module.exports = app; // <-- important

