import React from 'react'

import '../Header/Header.css'
import {NavLink, Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <div className="Head">

                <nav className="menu">
                    <Link to="/" className='logo' > <img src="https://i.postimg.cc/htKwbDHX/logocirque.png"/> </Link>
                    <NavLink className='link' to="/representation" activeStyle={{color:"#7bed9f"}} >Représentations</NavLink>
                    <NavLink className='link' to="/prix" activeStyle={{color:"#7bed9f"}}> Prix</NavLink>
                    <NavLink className='link' to="/photographies" activeStyle={{color:"#7bed9f"}}>Photographies</NavLink>
                    <NavLink className='link' to="/equipe"activeStyle={{color:"#7bed9f"}}>Notre équipe</NavLink>
                    <NavLink className='link' to="/login" activeStyle={{color:"#7bed9f"}} >Admin</NavLink>
                </nav>


            </div>

        </>
    )
}

