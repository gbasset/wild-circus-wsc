import React, { useState, useEffect } from 'react';
import {NavLink, Link } from 'react-router-dom'
import axios from "axios";
import '../representations/CardRepre.css'
import ButtonRepresentation from '../../Button/ButtonRepresentation'
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

    const fetchDataSpec = () => {
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
                setSpectaclePicture(res.data.slice(2, 5))

            })
    }


    useEffect(() => {
        fetchDataSpecRepres()
        fetchDataPicsSpec()
        fetchDataSpec()
    }, [])
    console.log('spectactePicture', spectaclePicture);

    return (
        <>
            <div className="cardContainerRepre">
                <div className="cardRepre">
                    <div className="encartDescription">
                        <h1 className="nomSpec"> {spectacle.perform_name} </h1>
                        <div className='containerimagesrepre'>
                            {spectaclePicture &&
                                spectaclePicture.map((date, i) => {
                                    return (<img className="imageSpecRepre" src={date.pictures_url}></img>)

                                })}
                        </div>
                        <p className="textspec"> {spectacle.perform_description} </p>
                    </div>
                    <table className="tableSpectacle" >
                        <thead className="tableauHead">
                            <tr >
                                <td colspan="2"><h1 className="titretable"> Liste des représentations</h1> </td></tr>
                            <tr>
                                <th className="" id="" > Ville  </th>
                                <th className=" pink bg-lightpink asc" id="order_tracking_number" > date et heures</th>
                            </tr>
                        </thead>
                        {" "}
                        {spectacleRepres &&
                            spectacleRepres.map((date, i) => {
                                return <>
                                    <tbody>
                                        <td className="villes" >
                                            <tr>  {date.repre_city} </tr>
                                        </td>

                                        <td>
                                            {date.repre_datetime}
                                        </td>

                                    </tbody>
                                </>

                            })}
                           
                             <NavLink className='link' to="/"  ><button className="butresa" > reserver</button></NavLink>
                            
                    </table>
                </div>
                


            </div>





        </>
    )
}
