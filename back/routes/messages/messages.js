const express = require("express")
const connection = require('../../conf')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("je suis sur la route /messages ").status(200)
})

router.get('/all', (req, res) => {
    connection.query(`SELECT * FROM messages`, (err, results) => {
        if (err) {
            console.log(err);
            console.log(err.sql);
            res.status(500).send('Erreur lors de la récupération des messages');
        } else {
            console.log(results)
            res.status(200).json(results);
        }
    });
})

router.route(['/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT * FROM messages WHERE message_id=${req.params.id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un message");
    } else {
      res.json(results).status(200);
    }
  });
})
  .post(function (req, res) {
    const formData = req.body;
    connection.query('INSERT INTO messages SET ?', formData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'ajout d'un message");
      } else {
        res.sendStatus(200);
      }
    });
  })
.put(function (req, res) {
  const formData = req.body;
  connection.query(`UPDATE messages SET ? WHERE message_id= ${req.params.id}`, [formData], err => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'un sujet");
    } else {
      res.sendStatus(200);
    }
  });
})
.delete(function (req, res) {
  connection.query(`DELETE FROM messages WHERE message_id= ${req.params.id}`, err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un sujet");
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router