const express = require("express");
const mysql = require("../config/db");

// Import de router depuis express
const router = express.Router();

// Route GET, Permettant de récupérer la liste des pieces
router.get("/", (req, res) => {
  const sql =
    "SELECT p.id, p.piece_name, p.buildings_id, p.peoples, b.building_name FROM pieces as p INNER JOIN buildings as b ON p.buildings_id = b.id;";
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

// Route POST, Permettant de poster une nouvelle piece
router.post("/", (req, res) => {
  const sql =
    "INSERT INTO pieces (`piece_name`, `buildings_id`, `peoples`) VALUES (?, ?, ?)";
  const values = [req.body.piece_name, req.body.buildings_id, req.body.peoples];
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

// Route PUT, Permettant de modifier une piece
router.put("/:id", (req, res) => {
  const { piece_name, buildings_id, peoples } = req.body;
  const { id } = req.params;
  const sql =
    "UPDATE pieces SET piece_name = ?, buildings_id = ?, peoples = ? WHERE (id = ?); ";
  const values = [piece_name, buildings_id, peoples, id];
  mysql.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM pieces WHERE (id = ?)";

  mysql.query(sql, [id], (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).json(result);
    }
  });
});

module.exports = router;
