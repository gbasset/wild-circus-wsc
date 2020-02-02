import React from 'react'
import './Button.css'
import { Link } from 'react-router-dom'
export default function ButtoRepresentation() {
    return (
        <>
           <Link to="/representation" > <input  className='butrepre'type="button" value="Voir les représentations"/>  </Link> 
            
        </>
    )
}