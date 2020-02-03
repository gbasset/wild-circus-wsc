import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import './Photographies.css'
export default function Photographies() {

    const [spectaclePicture, setSpectaclePicture] = useState([])

    const fetchDataPicsSpec = () => {
        axios // photos en relation avec le spectacle
            .get(`/image/pictshow/4`) 
            .then(res => {
                setSpectaclePicture(res.data)
            })
    }
    console.log('spectaclePicture', spectaclePicture);
    
    useEffect(() => {
        fetchDataPicsSpec()

    }, [])
    return (
        <>
            <Header />
            <div className="photo-container">

                <div class="parent">
                {spectaclePicture &&
                        spectaclePicture.map((pic, i) => {
                            return <div key={pic.pictures_id} className="picturesSpec"> 
                          <a target="_blank" href={pic.pictures_url}>  <img className="imageBlur" src={pic.pictures_url} alt={pic.pictures_name}/> </a>
                            </div>;
                        })}
                    
                  
                </div>
            </div>
            <Footer />
        </>
    )
}

