import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Form.css'
import { Link } from 'react-router-dom';

export default function Form() {
  let getDate = (separator='-') => {

    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    
  }
  let date = getDate();

  console.log('date', date);
  const [subject, setSubject] = useState()
  let [subject2, setSubject2] = useState();
  console.log('sub2',subject2);
  
  const [msg, setMsg] = useState({
    message_client_name : "",
    message_client_lastname: "",
    message_client_phone: "",
    message_client_mail: "",
    message_message: "",
    message_objet_id: 3,
    message_date: date,

  })

  const fetchDataSujet= () => {
    axios
        .get("/sujet/all") //liste les commandes
        .then(res => {
            setSubject(res.data)
        })
}
    const handleSubmit = e => {
      e.preventDefault()
      axios.post("/messages/",msg)
      .then(res => {
        if (res.err) {
          alert(res.err);
        } else 
          alert(`${msg.message_client_name} votre message a été envoyé avec succès`)
      })
    }

  const updateMsg = (e) => {
      setMsg({ ...msg, [e.target.name]: e.target.value })
  }


  // const chooseSubject= (e) => {
  //   // création d'une variable qui vas filtrer datacollection pour transformer collection name en collection id
  //   let subject = subject2.filter(sub => sub.category_name.toUpperCase() === e.target.value.toUpperCase())
  //   let newCategorieId = newCategorie[0].category_id
  //   setProductModify({ ...productModify, [e.target.name]: e.target.value })
  //   console.log('newcollection', newCategorie);
  //   console.log('-------');
  //   console.log('e target', e.target.value);
  //   console.log('newcollectionid', newCategorieId);
  //   setProductModify({ ...productModify, product_category_id: newCategorieId })
  // }

  useEffect(() => {
    fetchDataSujet()
  }, [])
  return (
    <>
      <form className="formulaireresa">
        <h2> Formulaire de contact </h2>
        <label for="select">Selectionnez un sujet</label>
        <select
          className="select"
          name="category_name"
          id="inputGroupSelect01"

        >

          {subject &&
            subject.map(data2 => {
              return <option>{data2.object_name} </option>;
            })}

        </select>

        <input type="text" placeholder="Votre nom" className="inputForm" name="message_client_name" onChange={updateMsg} />
        <input type="text" placeholder="Votre Prénom" className="inputForm" name="message_client_lastname"onChange={updateMsg}/>
        <input type="phone" placeholder="Votre téléphone" className="inputForm" name="message_client_phone" onChange={updateMsg}/>
        <input type="email" multiple placeholder="Votre mail" className="inputForm" name="message_client_mail"onChange={updateMsg} />
        <textarea rows="5" cols="60" placeholder="Votre message" className="textArea" name="message_message"onChange={updateMsg} />

        <div>

          <button
            type="submit"
            className="btnSendMsg"
            onClick={handleSubmit}
          >
            Envoyer
         </button>
        </div>
      </form>



    </>
  )
}

