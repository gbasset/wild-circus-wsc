const express = require("express")
const connection = require('../../conf')

const router = express.Router()

router.get('/', (req, res) => {
  res.send("je suis sur la route /images ").status(200)
})

router.get('/all', (req, res) => {
  connection.query(`SELECT * FROM pictures`, (err, results) => {
    if (err) {
      console.log(err);
      console.log(err.sql);
      res.status(500).send('Erreur lors de la récupération des images');
    } else {
      console.log(results)
      res.status(200).json(results);
    }
  });
})
/// ICI route pour récupérer les images relatives à un spectacle ////
router.route(['/pictshow/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT pictures_id, pictures_url, pictures_name, perf.perform_id, perf.perform_name, perf.perform_description FROM pictures JOIN perform AS perf on perf.perform_id=pictures_perform_id WHERE perf.perform_id=${req.params.id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des images");
    } else {
      res.json(results).status(200);
    }
  });
})
/// ICI route pour récupérer les images relatives à un perso de la team ////
router.route(['/usershow/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT pictures_id, pictures_url, pictures_name, t.team_id, t.team_name, t.team_lastname, t.team_pseudo, t.team_role FROM pictures JOIN team AS t on t.team_id=pictures_user_team_id WHERE t.team_id=${req.params.id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des images");
    } else {
      res.json(results).status(200);
    }
  });
})


router.route(['/:id', '/'])
.get(function (req, res) {
  connection.query(`SELECT * FROM pictures WHERE pictures_id=${req.params.id}`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des images");
    } else {
      res.json(results).status(200);
    }
  });
})
  .post(function (req, res) {
    const formData = req.body;
    connection.query('INSERT INTO pictures SET ?', formData, (err, results) => {
      if (err) {
        res.status(500).send("Erreur lors de l'ajout des images");
      } else {
        res.sendStatus(200);
      }
    });
  })
.put(function (req, res) {
  const formData = req.body;
  connection.query(`UPDATE pictures SET ? WHERE pictures_id= ${req.params.id}`, [formData], err => {
    if (err) {
      res.status(500).send("Erreur lors de la modification de l'image");
    } else {
      res.sendStatus(200);
    }
  });
})
.delete(function (req, res) {
  connection.query(`DELETE FROM pictures WHERE pictures_id= ${req.params.id}`, err => {
    if (err) {
      res.status(500).send("Erreur lors de la suppression de l'image");
    } else {
      res.sendStatus(200);
    }
  });
});


module.exports = router