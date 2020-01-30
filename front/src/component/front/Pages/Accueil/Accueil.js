import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../Header/Header'
import './Accueil.css'
import ButtonRepresentation from '../../Button/ButtonRepresentation'
export default function Accueil() {
const [pictures, setPictures] = useState([])
    const fetchData = () => {
        axios
            .get("/image/all") //liste les commandes
            .then(res => {
                setPictures(res.data)
            })
    }
    useEffect(() => {
        fetchData()
      }, [])
      console.log('pictures', pictures);
      
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

            </div>

        </>
    )
}

