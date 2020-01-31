import React from 'react'

import {NavLink, Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <div className="Head">
                <nav className="menu">
                    <Link to="/" className='logo' > <img src="https://i.postimg.cc/htKwbDHX/logocirque.png"/> </Link>
                    <NavLink className='link' to="/admin" activeStyle={{color:"#7bed9f"}}>Accueil admin</NavLink>
                    <NavLink className='link' to="/representationadmin" activeStyle={{color:"#7bed9f"}} >Representations</NavLink>
                    <NavLink className='link' to="/equipeadmin" activeStyle={{color:"#7bed9f"}}>L'equipe</NavLink>
                </nav>

            </div>

        </>
    )
}

