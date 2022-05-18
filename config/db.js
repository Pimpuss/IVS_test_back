// Import de Dotenv pour aller chercher les variables d'environement dans le .env
require("dotenv").config();

//Import de Mysql2 pour se connecter à la BDD
const mysql = require("mysql2");

// Creation de la connection allant chercher les info dans le .env
const connection = mysql.createConnection({
  host: process.env.DB_HOST, // Adresse du server
  port: process.env.DB_PORT, // Port sur lequel on est connecté (souvent 4242)
  user: process.env.DB_USER, // Nom d'utilisateur de la BDD
  password: process.env.DB_PASSWORD, // Pass de la BDD
  database: process.env.DB_NAME, // Nom de la BDD
});

// Export de connection afin de l'utiliser dans le server.js
module.exports = connection;
