const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const connection = require('../../conf')

const router = express.Router()

/**
 * Route de register d'un utilisateur
 */


router.route(['/all',])
.get(function (req, res) {
  connection.query(`SELECT * FROM user`, (err, results) => {
    if (err) {
      res.status(500).send("Erreur lors de la récupération des users");
    } else {
      res.json(results).status(200);
    }
  });
})

router.post('/', (req,res)=>{

  /**
   * Verification du format de l'email fournit.
   */
  
  const emailRegEx= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
  
  if(!emailRegEx.test(req.body.email)){ //on test l'email fournit avec la regex 'emailRegEx'
    return res.status(401).send('Unauthorized user')
  }

  /**
   * Creation de l'utilisateur a rentrer en base
   */

  const user ={
    user_name : req.body.name,
    user_lastName : req.body.lastName,
    user_email : req.body.email,
    user_pass : bcrypt.hashSync(req.body.password) //on chiffre le mot de passe grace a bcrypt => bcrypt doc pour plus de secu
  }
  
  /**
   * Verification de l'absence de l'utilisateur dans la base
   */
  console.log(user);
  
  connection.query(`SELECT user_id FROM user WHERE user_email = ?`, user.user_email, (err,result) =>{
    if(err) {
        console.log(err);
        
      return res.status(500).send('internal server error')
    }
    
    else if(result.length>0) { 
      return res.status(409).send('User already exists') // si on a un resultat, l'email est deja enregistre on renvoie une 409
    }

    /**
     * Insertion de l'utilisateur en base
     */

    connection.query(`INSERT INTO user SET ?`, user, (err,result)=>{
      if(err){
          console.log(err);
          
        return res.status(500).send('Cannot register the user')
      }

      /**
       * Renvoie de l'utilisateur enregistre au front
       */

      connection.query(`SELECT user_id, user_name, user_lastname, user_email FROM user WHERE user_id =?`, result.insertId, (err, result) =>{ //on ne renvoie JAMAIS le mot de passe au front.
        if(err) {
            console.log(err);
            
          return res.status(500).send('Internal server error')
        }
        res.status(200).send(result)
      })
    })
  })
})

module.exports = router