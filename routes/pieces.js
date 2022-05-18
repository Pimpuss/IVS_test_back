const express = require("express");
const mysql = require("../config/db");

const router = express.Router();

// Route GET, Permettant de récupéré la liste des pieces
router.get("/", (req, res) => {
  const sql =
    "SELECT p.id, p.piece_name, p.buildings_id, b.building_name FROM pieces as p INNER JOIN buildings as b;";
  mysql.query(sql, (err, result) => {
    if (err) {
      res
        .status(500)
        .send("Erreur lors de la réception des données depuis la BDD");
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
