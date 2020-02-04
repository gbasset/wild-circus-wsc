import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../representations/CardRepre.css'

export default function Card(props) {


    const [spectacleRepres, setSpectacleRepres] = useState([])
    const [spectacle, setSpectacle] = useState([])
    const [spectaclePicture, setSpectaclePicture] = useState([])

    const fetchDataSpecRepres = () => {
        axios// voir les représentations
            .get("/representation/all")
            .then(res => {
                setSpectacleRepres(res.data)
            })
    }
    console.log('spectacleRepres', spectacleRepres);

    const fetchDataSpec= () => {
        axios
            .get("/spectacle/4")
            .then(res => {
                setSpectacle(res.data[0])
            })
    }

    const fetchDataPicsSpec = () => {
        axios // photos en relation avec le spectacle
            .get(`/image/pictshow/4`)
            .then(res => {
                setSpectaclePicture(res.data)
               
            })}

    useEffect(() => {
        fetchDataSpecRepres()
        fetchDataPicsSpec()
        fetchDataSpec()
    }, [])
    console.log('spectacle', spectacle);
    console.log('spectacle.perform_name', spectacle);
    return (
        <>
            <div className="cardContainerRepre">
                <div className="cardRepre">
                    <h1 className="nomSpec"> {spectacle.perform_name} </h1>
                    <p> {spectacle.perform_description} </p>
                    <p>
                 {spectacleRepres &&
                        spectacleRepres.map((date, i) => {
                            return <> Ville: {date.repre_city} date : {date.repre_date}</>
                        })}
                    </p>
                    
                </div>

                
                </div>

        </>
    )
}
