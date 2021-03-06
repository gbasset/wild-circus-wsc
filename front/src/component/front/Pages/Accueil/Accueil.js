import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../Header/Header'
import Form from '../../Form/Form'
import Footer from '../../Footer/Footer'
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

    let toTop = () => {
        window.scrollTo({ top: 1500, behavior: 'smooth' });

    }
    return (
        <>
            <Header />
            <div className="containerbody">
                <div className="img-head">
                    <h1 className="circus-title"> Basset Circus</h1>
                    <div className="body">
                        <ButtonRepresentation />
                    </div>
                    <button className="butresa" onClick={toTop}> Aller vers réservation</button>
                </div>


                <Form />


                <Footer id="FooterAcc" />
            </div>

        </>
    )
}

