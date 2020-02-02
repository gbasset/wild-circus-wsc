import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Form.css'

export default function Form(props) {
  const [subject2, setSubject2] = useState(props.data)

  console.log('props.data', props.data);

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

          {props.data &&
            props.data.map(data => {
              return <option>{data.object_name} </option>;
            })}

        </select>

        <input type="text" placeholder="Votre nom" className="inputForm" />
        <input type="text" placeholder="Votre Prénom" className="inputForm" />
        <input type="text" placeholder="Votre téléphone" className="inputForm" />
        <input type="text" placeholder="Votre mail" className="inputForm" />
        <textarea rows="5" cols="60" placeholder="Votre message" className="textArea" />

        <div>

          <button
            type="submit"
            className="btnSendMsg"
          >
            Envoyer
         </button>
        </div>
      </form>



    </>
  )
}

