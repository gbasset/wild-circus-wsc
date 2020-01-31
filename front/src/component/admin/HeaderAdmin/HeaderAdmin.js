import React from 'react'

import { Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <div className="Head">
                <nav className="menu">
                    <Link to="/" className='logo' > <img src="https://i.postimg.cc/htKwbDHX/logocirque.png"/> </Link>
                    <Link className='link' to="/admin">Accueil admin</Link>
                    <Link className='link' to="/representationadmin">Representations</Link>
                    <Link className='link' to="/equipeadmin">L'equipe</Link>
                </nav>

            </div>

        </>
    )
}

