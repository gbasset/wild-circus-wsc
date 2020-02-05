import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import Card from '../../Card/Card'
import './Equipe.css'
export default function Equipe() {

    const [characters, setCharacters] = useState()
    const [totalVotes, setTotalVotes] = useState([])

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

// dès que characters change il re rend 
    useEffect(() => {
        GetTotalVotes(characters)

    }, [characters])
    
    /// pas de crochets je boucle 
    /// crochets vides didmount 1 * 
    /// sinon did update avec ce qui change entre crochets 

    const GetTotalVotes = (x) => {
        
    //     if (characters) {
    //         const newTab=  x.map(e => e.team_rank)
    //         setTotalVotes(newTab)
    //     }
    // } 
    
    
    let newTab = []
    if(characters){
        for (let i=0; i<x.length; i++) {
            newTab.push(x[i].team_rank,x[i].team_id )
            
        }
        setTotalVotes(newTab)
    //     console.log('newtab',newTab)
    //     console.log('characters', characters[1].team_id);

    console.log('totalvotes', totalVotes);
    }}
    function compare(x, y) {
        return y - x;
    }

    var nombres = totalVotes ;
    nombres.sort(compare);  
    console.log('newtablo',nombres.slice(0,5));
      
    
    return (
        <>
            <Header />
            <div className="equipe-container">
                <div className="textCard">
                    <h1> Notre équipe </h1>
                    <p> Il y aura encore d'autres pistes, d'autres pur-sang qui se frôleront, se frotteront et danseront en harmonie avec d'autres fauves, d'autres acrobates désarticulés, d'autres clowns, car l'enfant a vu beau en voulant voir vrai. Ici, la vérité d'un exploit sans cesse répété est toute la différence du cirque. Ici les effets spéciaux ne sont confiés qu'aux hommes et aux femmes qui se produisent sous vos yeux.En ces temps de domination sans partage du virtuel et des écrans vidéo, la vérité de cette piste va vous sauter aux yeux. Tant que les chevaux tourneront, le cirque et ses joies régneront pour l'éternité !Vous serez accueillis sous les célèbres rayures rouges et blanches d'un tout nouveau chapiteau rond ultra chaleureux au confort total de 1100 sièges. La décoration style baroque et les éclairages à profusion ont de quoi faire pâlir les salles les plus prestigieuses. On vous attend !</p>


                </div>
                {/* <button onClick={() => GetTotalVotes(characters)}> Clic</button> */}


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

