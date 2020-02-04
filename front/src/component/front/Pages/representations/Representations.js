import React, { useState, useEffect } from 'react';
import axios from "axios";
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import CardRepre from './CardRepre'
import './Representations.css'
export default function Representations() {

    useEffect(() => {


    }, [])



    return (
        <>
            <Header />
            <div className="container2">
                <div className="">
                    <p> Je suis la route representations</p>

                </div>
                <CardRepre/>
            </div>
            <Footer />
        </>
    )
}

