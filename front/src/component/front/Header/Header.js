import React from 'react'

import '../Header/Header.css'
import {Link} from 'react-router-dom'
export default function Header() {
    return (
    <>
        <div className="Head">

            <nav className="menu">
                <Link to="/" className='logo' >Logo</Link>
                <Link to="/representation" >Représentations</Link>
                <Link to="/prix"> Prix</Link>
                <Link to="/photographies">Photographies</Link>
                <Link to="/equipe">Notre équipe</Link>
                <Link to="/Admin">Admin</Link>
            </nav>

            <div className="img-title">
                <div className="welcome">
                    <h1> Bienvenue</h1>
                    <h2>
                        <div className='Photo de couv'>

                        </div>
                    </h2>
                </div>
            </div>


        </div>

    </>
    )
}

