import React, { useState, useEffect } from 'react';
import axios from "axios";
import './Form.css'

export default function Form(props) {
const [subject2, setSubject2] = useState(props.data)

      console.log('props.data', props.data);
      
    return (
        <>
        <form>
            <input type="text" />

            <label htmlFor="sujet">sujet</label>
            <select
              className="custom-select text-center"
              name="category_name"
              id="inputGroupSelect01"
           
            >
              <option selected> Selectionner une Catégorie</option>
              {props.data &&
                props.data.map(data => {
                  return <option>{data.object_name} </option>;
                })}
            </select>
  
        </form>



        </>
    )
}

