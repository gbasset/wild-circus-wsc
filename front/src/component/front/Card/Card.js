import React, { useState, useEffect } from 'react';
import axios from "axios";
import '../Card/Card.css'

export default function Card(props) {

    const [charactersPics, setCharactersPics] = useState()
    const [voteCharacter, setVoteCharacter] = useState(props.donnes)


    const fetchPics = () => {
        axios
            .get(`http://localhost:4000/image/usershow/${props.donnes.team_id}`)
            .then(res => {
                setCharactersPics(res.data)
            })
    }

    const VotePerso = () => {
        console.log('tid', voteCharacter.voteCharacter)
        axios
            .put(`http://localhost:4000/team/${voteCharacter.voteCharacter.team_id}`, voteCharacter.voteCharacter)
            .then(res => {
                if (res.err) {
                    alert(res.err);
                } else {
                    alert(` Votre vote a été comptabilisé avec succès!`)

                    document.location.reload(true);
                    fetchPics()
                }
            })
    }
    let VotePlus = () => {
        let newVoteRank = voteCharacter
        newVoteRank.team_rank += 1;
        parseInt(newVoteRank.team_rank)
        setVoteCharacter({ voteCharacter: newVoteRank })
        console.log('voteCharacter', voteCharacter.team_rank);
    }



    useEffect(() => {
        fetchPics()

    }, [props])
    return (
        <>
            <div className="cardContainer">
                <div className="card">
                    <h1 className="pseudo"> {props.donnes.team_pseudo} </h1>
                    {charactersPics ? (<a target="_blank" href={charactersPics[0].pictures_url}> <img className="photo" src={charactersPics[0].pictures_url} alt={charactersPics.pictures_name} /> </a>) : null}
                    <div className="allPictures">
                        {charactersPics &&
                            charactersPics.slice(1, 10).map((pic, i) => {
                                return (<a target="_blank" href={charactersPics[i + 1].pictures_url}> <img className="photo2" src={pic.pictures_url} alt={charactersPics.pictures_name} /> </a>);
                            })}
                    </div>
                    <div className="container">
                        <h3><b> {props.donnes.team_name} {props.donnes.team_lastname}</b></h3>
                        <p>Role :  {props.donnes.team_role}</p>
                        <p>Nombre de votes :<span> {props.donnes.team_rank} </span></p>
                        <button style={{ cursor: 'pointer', fontSize: '25px' }} onClick={VotePlus}> Voter pour {props.donnes.team_pseudo} &#x2B50; </button>
                        <div className="soumissions">

                            <button className="vote" onClick={VotePerso}> Soumettre mon vote</button>
                        </div>
                    </div>


                </div>

            </div>

        </>
    )
}
