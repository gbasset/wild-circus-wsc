import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Card from '../../Card/Card'
import './Equipe.css'
export default function Equipe() {

    const [characters, setCharacters] = useState()

    const fetchCharacters = () => {
        axios
            .get("/team/all")
            .then(res => {
                setCharacters(res.data)
            })
    }

    useEffect(() => {
        fetchCharacters()

    }, [])

    return (
        <>
            <Header />
            <div className="equipe-container">
                <div className="textCard">
                    <p> Je suis la route Equipe</p>
                    <p> jkdjkjds jdsfk  jdsfk jdsj fldsj flkjskdlf jlksj flk slkd flj sdj lsjd lksdj lksdj lksd lksdjlksdjlksd jlkdsjkld sjlkjd sjdsljslkdjklsdjkljsdljsdklj lkjsdlkjskdljklsdj sd3jkjsdlksjdklsjdfkl dsjfjskr jksedkfjdrklgkdrljfierugtjd flgbjgfkljh klg jhobmghmb fgjlhnjglckvbjklcg bli
                    </p>
                    <p> jkdjkjds jdsfk  jdsfk jdsj fldsj flkjskdlf jlksj flk slkd flj sdj lsjd lksdj lksdj lksd lksdjlksdjlksd jlkdsjkld sjlkjd sjdsljslkdjklsdjkljsdljsdklj lkjsdlkjskdljklsdj sd3jkjsdlksjdklsjdfkl dsjfjskr jksedkfjdrklgkdrljfierugtjd flgbjgfkljh klg jhobmghmb fgjlhnjglckvbjklcg bli
                    </p>
                    <p> jkdjkjds jdsfk  jdsfk jdsj fldsj flkjskdlf jlksj flk slkd flj sdj lsjd lksdj lksdj lksd lksdjlksdjlksd jlkdsjkld sjlkjd sjdsljslkdjklsdjkljsdljsdklj lkjsdlkjskdljklsdj sd3jkjsdlksjdklsjdfkl dsjfjskr jksedkfjdrklgkdrljfierugtjd flgbjgfkljh klg jhobmghmb fgjlhnjglckvbjklcg bli
                    </p>

                </div>


                <div className="mapcard">

                    {characters &&
                        characters.map((donnesCharact, i) => {
                            return <Card donnes={donnesCharact} index={i} />;
                        })}
                </div>
            </div>
            <Footer />
        </>
    )
}

