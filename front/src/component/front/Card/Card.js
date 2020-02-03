import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../Card/Card.css'

export default function Card(props) {
    console.log('ddhh', props.donnes)
    const [charactersPics, setCharactersPics] = useState()
    console.log('charactersPics', charactersPics)
    const fetchPics = () => {
        axios
            .get(`http://localhost:4000/image/usershow/${props.donnes.team_id}`)
            .then(res => {
                setCharactersPics(res.data)
            })
    }


    useEffect(() => {
        fetchPics()

    }, [props])
    return (
        <>
            <div className="cardContainer">
                <div className="card">
                    <h1 className="pseudo"> {props.donnes.team_pseudo} </h1>
                    {charactersPics ? ( <a target="_blank" href={charactersPics[0].pictures_url}> <img className="photo" src={charactersPics[0].pictures_url} alt={charactersPics.pictures_name} /> </a> ) : null}
                    <div className="allPictures">
                        {charactersPics &&
                            charactersPics.slice(1, 10).map((pic, i) => {
                            return ( <a target="_blank" href={charactersPics[i+1].pictures_url}> <img className="photo2" src={pic.pictures_url} alt={charactersPics.pictures_name} /> </a>);
                            })}
                    </div>
                    <div className="container">
                        <h3><b> {props.donnes.team_name} {props.donnes.team_lastname}</b></h3>
                        <p>Role :  {props.donnes.team_role}</p>
                    </div>

                </div>

            </div>

        </>
    )
}
