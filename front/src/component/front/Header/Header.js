import React from 'react'

import '../Header/Header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <div className="Head">

                <nav className="menu">
                    <Link to="/" className='logo' > <img src="https://i.postimg.cc/htKwbDHX/logocirque.png"/> </Link>
                    <Link className='link' to="/representation" >Représentations</Link>
                    <Link className='link' to="/prix"> Prix</Link>
                    <Link className='link' to="/photographies">Photographies</Link>
                    <Link className='link' to="/equipe">Notre équipe</Link>
                    <Link className='link' to="/Admin" >Admin</Link>
                </nav>


            </div>

        </>
    )
}

