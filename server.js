// Import de Dotenv pour aller chercher les variables d'environement dans le .env
require("dotenv").config;

// Import de express,
const express = require("express");

// Import de Morgan, Permet d'affichier plus d'informations dans la console pour le dév lors du lancement du server
const morgan = require("morgan");

// Import de cors,
const cors = require("cors");

// Import de mysql du fichier db comprenant toutes la configuration pour la connection à la BDD
const mysql = require("./config/db");

const routes = require("./routes/index");

// Creation de server lui donnant toute la puissance de express
const server = express();

// Permet de vérifier si nous sommes connecté à la BDD , sinon affiche le code erreur
mysql.connect((err) => {
  if (err) {
    console.error("erreur de connection" + err.stack);
  } else {
    console.log(
      "connecté à la base de données avec le threadId " + mysql.threadId
    );
  }
});

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/organisations", routes.organisations);
server.use("/buildings", routes.buildings);
server.use("/pieces", routes.pieces);

// Effectue un get à la racine du server et nous renvoie un res status disant que le serveur tourne
server.get("/", (req, res) => {
  res.status(200).json("Tout fonctionne !");
});

// Donner le port que le serveur doit écouter et nous renvoie dans la console l'adresse du serveur
server.listen(
  process.env.PORT,
  console.log(`http://localhost:${process.env.PORT}`)
);
