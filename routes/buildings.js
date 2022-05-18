const express = require("express");
const mysql = require("../config/db");

const router = express.Router();

// Route GET, Permettant de récupéré la liste de buildings
router.get("/", (req, res) => {
  const sql =
    "SELECT b.id, b.building_name, b.zipcode, b.organisations_id, o.organisation_name FROM buildings as b INNER JOIN organisations as o;";
  // "SELECT * FROM organisation.buildings;";
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
