const express = require("express")
const connection = require('../../conf')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("je suis sur la route /subject ").status(200)
})

router.get('/all', (req, res) => {
    connection.query(`SELECT * FROM subject`, (err, results) => {
        if (err) {
            console.log(err);
            console.log(err.sql);
            res.status(500).send('Erreur lors de la récupération des sujets');
        } else {
            console.log(results)
            res.status(200).json(results);
        }
    });
})
/////////////// recuperer les messages selon l'objet de celui ci /////////
router.route(['mailbysubject/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT object_name, subjetct_id, m.message_objet_id, m.message_date, m.message_id, m.message_client_name,	m.message_client_lastname, m.message_client_phone, m.message_client_mail,message_message FROM subject JOIN messages AS m on m.message_objet_id=subjetct_id
  WHERE subjetct_id=${req.params.id} ORDER BY m.message_date ASC `, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un sujet");
    } else {
      res.json(results).status(200);
    }
  });
})

router.route(['/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT * FROM subject WHERE subjetct_id=${req.params.id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un sujet");
    } else {
      res.json(results).status(200);
    }
  });
})
  .post(function (req, res) {
    const formData = req.body;
    connection.query('INSERT INTO subject SET ?', formData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'ajout d'un sujet");
      } else {
        res.sendStatus(200);
      }
    });
  })
.put(function (req, res) {
  const formData = req.body;
  connection.query(`UPDATE subject SET ? WHERE subjetct_id= ${req.params.id}`, [formData], err => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'un sujet");
    } else {
      res.sendStatus(200);
    }
  });
})
.delete(function (req, res) {
  connection.query(`DELETE FROM subject WHERE subjetct_id= ${req.params.id}`, err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un sujet");
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router