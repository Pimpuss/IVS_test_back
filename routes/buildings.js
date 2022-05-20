const express = require("express");
const mysql = require("../config/db");

// Import de router depuis express
const router = express.Router();

// Route GET, Permettant de récupérer la liste de buildings avec le nombre de personnes totales
router.get("/", (req, res) => {
  const sql =
    "SELECT b.id, b.building_name, b.zipcode, b.organisations_id, o.organisation_name, SUM(p.peoples) as nb_peoples FROM buildings as b LEFT JOIN organisations as o ON o.id = b.organisations_id LEFT JOIN pieces as p ON p.buildings_id = b.id GROUP BY b.id;";
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

// Route POST, Permettant de poster un nouveaux building
router.post("/", (req, res) => {
  const sql =
    "INSERT INTO buildings (`building_name`, `zipcode`, `organisations_id`) VALUES (?, ?, ?)";
  const values = [
    req.body.building_name,
    req.body.zipcode,
    req.body.organisations_id,
  ];
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).json(result);
    }
  });
});

// Route PUT, Permettant de modifier un building
router.put("/:id", (req, res) => {
  const { building_name, zipcode, organisations_id } = req.body;
  const { id } = req.params;
  const sql =
    "UPDATE buildings SET building_name = ?, zipcode = ?, organisations_id = ?  WHERE (id = ?); ";
  const values = [building_name, zipcode, organisations_id, id];
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

// Route DELET, Permettant de supprimer un building
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM buildings WHERE (id = ?)";

  mysql.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
