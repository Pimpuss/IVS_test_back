const express = require("express");
const mysql = require("../config/db");

const router = express.Router();

// Route GET, Permettant de récupéré la liste des organisations
router.get("/", (req, res) => {
  const sql = "SELECT * FROM organisation.organisations;";
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
