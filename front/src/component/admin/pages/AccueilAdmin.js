import React from 'react'
import Header from '../../../component/front/Header/Header'
import Login from '../../admin/pages/Login/Login'
import Footer from '../../../component/front/Footer/Footer'
import './AccueilAdmin.css'
import HeaderAdmin from '../HeaderAdmin/HeaderAdmin'
import { Switch, Route } from "react-router-dom";

export default function Equipe() {
    return (
        <>
            <HeaderAdmin />
            <div className="admin-container">
                <p style={{color:'red'}}> je suis un text</p>

            </div>
<Footer/>
        </>
    )
}

