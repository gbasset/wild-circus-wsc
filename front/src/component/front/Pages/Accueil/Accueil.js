import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../Header/Header'
import Form from '../../Form/Form'
import './Accueil.css'
import ButtonRepresentation from '../../Button/ButtonRepresentation'
export default function Accueil() {
const [pictures, setPictures] = useState([])
const [subject, setSubject] = useState([])
    const fetchData = () => {
        axios
            .get("/image/all") //liste les commandes
            .then(res => {
                setPictures(res.data)
            })
    }
    const fetchDataSujet= () => {
        axios
            .get("/sujet/all") //liste les commandes
            .then(res => {
                setSubject(res.data)
            })
    }
    useEffect(() => {
        fetchData()
        fetchDataSujet()
      }, [])
      console.log('pictures', pictures);
      console.log('sujet', subject);
      
    return (
        <>
            <Header />
            <div className="container"> 
            <div className="img-head">
                <h1 className="circus-title"> Basset Circus</h1>
                <div className="body">
                <ButtonRepresentation/>


                </div>
            </div>
            <Form data={subject}/>

            </div>

        </>
    )
}

