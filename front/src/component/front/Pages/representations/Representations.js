import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './Representations.css'
export default function Representations() {
    const [spectacle, setSpectacle] = useState([])
    const [spectaclePicture, setSpectaclePicture] = useState([])
    const fetchDataSpec = () => {
        axios// voir les représentations
            .get("/representation/all") 
            .then(res => {
                setSpectacle(res.data)
            })
    }
    console.log('spectacle',spectacle);
    
    const fetchDataPicsSpec = () => {
        axios // photos en relation avec le spectacle
            .get(`/image/pictshow/4`) 
            .then(res => {
                setSpectaclePicture(res.data)
            })
    }
    console.log('spectaclePicture',spectaclePicture);
    useEffect(() => {
        fetchDataSpec()
        fetchDataPicsSpec()

    }, [])



    return (
        <>
        <Header/>
        <div className="container2"> 
            <div className="">
                <p> Je suis la route representations</p>

            </div>
        </div>
<Footer/>
        </>
    )
}

