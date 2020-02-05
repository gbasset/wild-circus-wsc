const express = require("express")
const connection = require('../../conf')

const router = express.Router()

router.get('/', (req, res) => {
    res.send("je suis sur la route /team ").status(200)
})

router.get('/all', (req, res) => {
    connection.query(`SELECT * from team`, (err, results) => {
        if (err) {
            console.log(err);
            console.log(err.sql);
            res.status(500).send('Erreur lors de la récupération des membres de l\'équipe');
        } else {
            console.log(results)
            res.status(200).json(results);
        }
    });
})
router.get('/all/rank', (req, res) => {
  connection.query(`SELECT * from team order by team_rank`, (err, results) => {
      if (err) {
          console.log(err);
          console.log(err.sql);
          res.status(500).send('Erreur lors de la récupération des rank de l\'équipe');
      } else {
          console.log(results)
          res.status(200).json(results);
      }
  });
})
router.get('/allpicsbycharacter', (req, res) => {
  connection.query(`SELECT p.pictures_url, p.pictures_name FROM team  JOIN pictures AS p on p.pictures_user_team_id=team_id`, (err, results) => {
      if (err) {
          console.log(err);
          console.log(err.sql);
          res.status(500).send('Erreur lors de la récupération des membres de l\'équipe');
      } else {
          console.log(results)
          res.status(200).json(results);
      }
  });
})


router.route(['/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT * FROM team WHERE team_id=${req.params.id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération d'un membre de l\'équipe");
    } else {
      res.json(results).status(200);
    }
  });
})
  .post(function (req, res) {
    const formData = req.body;
    connection.query('INSERT INTO team SET ?', formData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'ajout d'un membre de l\'équipe");
      } else {
        res.sendStatus(200);
      }
    });
  })
.put(function (req, res) {
  const formData = req.body;
  connection.query(`UPDATE team SET ? WHERE team_id= ${req.params.id}`, [formData], err => {
    if (err) {
      res.status(500).send("Erreur lors de la modification d'un membre de l\'équipe");
    } else {
      res.sendStatus(200);
    }
  });
})
.delete(function (req, res) {
  connection.query(`DELETE FROM team WHERE team_id= ${req.params.id}`, err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression d'un membre de l\'équipe");
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router