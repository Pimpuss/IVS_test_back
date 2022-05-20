const express = require("express");
const mysql = require("../config/db");

// Import de router depuis express
const router = express.Router();

// Route GET, Permettant de récupéré la liste des organisations avec le nombre de personnes totales
router.get("/", (req, res) => {
  const sql =
    "SELECT o.id, o.organisation_name, SUM(p.peoples) as nb_peoples FROM organisations AS o LEFT JOIN buildings AS b ON o.id = b.organisations_id LEFT JOIN pieces AS p ON b.id = p.buildings_id GROUP BY o.id;";
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

// Route POST, Permettant de poster une nouvelle organisation
router.post("/", (req, res) => {
  const sql = "INSERT INTO organisations (`organisation_name`) VALUES (?)";
  const values = [req.body.organisation_name];
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

// Route PUT, Permettant de modifier une organisation
router.put("/:id", (req, res) => {
  const { organisation_name } = req.body;
  const { id } = req.params;
  const sql = "UPDATE organisations SET organisation_name = ? WHERE (id = ?); ";
  const values = [organisation_name, id];
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

// Route DELET, Permettant de supprimer une organisation
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM organisations WHERE (id = ?)";

  mysql.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
