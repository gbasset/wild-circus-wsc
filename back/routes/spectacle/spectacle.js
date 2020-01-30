const express = require("express")
const connection = require('../../conf')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("je suis sur la route /spectacle ").status(200)
})

router.get('/all', (req, res) => {
    connection.query(`SELECT * FROM perform`, (err, results) => {
        if (err) {
            console.log(err);
            console.log(err.sql);
            res.status(500).send('Erreur lors de la récupération des spectacles');
        } else {
            console.log(results)
            res.status(200).json(results);
        }
    });
})

router.route(['/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT * FROM perform WHERE perform_id=${req.params.id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un spectacle");
    } else {
      res.json(results).status(200);
    }
  });
})
  .post(function (req, res) {
    const formData = req.body;
    connection.query('INSERT INTO perform SET ?', formData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'ajout d'un spectacle");
      } else {
        res.sendStatus(200);
      }
    });
  })
.put(function (req, res) {
  const formData = req.body;
  connection.query(`UPDATE perform SET ? WHERE perform_id= ${req.params.id}`, [formData], err => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'un spectacle");
    } else {
      res.sendStatus(200);
    }
  });
})
.delete(function (req, res) {
  connection.query(`DELETE FROM perform WHERE perform_id= ${req.params.id}`, err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un spectacle");
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router

