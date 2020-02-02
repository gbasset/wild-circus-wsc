import React from 'react'

import '../Footer/Footer.css'
import ButtonRepresentation from '../Button/ButtonRepresentation'
import {NavLink, Link } from 'react-router-dom'
export default function Header() {
    return (
        <>
            <div className="footer_container">

                <nav className="footer">
                   
                  <p><a target="_blank" href="https://www.facebook.com/"  className='logoSocial' > <i class="icon ion-logo-facebook"></i> </a></p> 
                 <p> <a target="_blank" href="https://www.instagram.com/architeclego/?hl=fr/"  className='logoSocial' > <i class="icon ion-logo-instagram"></i> </a></p> 
                  <p><a target="_blank" href="https://www.youtube.com/" className='logoSocial' > <i class="icon ion-logo-youtube"></i> </a></p> 
                  <p><a target="_blank" href="https://www.twitter.com/"  className='logoSocial' > <i class="icon ion-logo-twitter"></i></a> </p>
             
                </nav>

            </div>

        </>
    )
}

