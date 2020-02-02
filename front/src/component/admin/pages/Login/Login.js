
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Login.css'
import Header from '../../../front/Header/Header'
import Footer from '../../../front/Footer/Footer'
export default function Login() {

    const [user, setUser] = useState({
        user_pass: null,
        user_email: null,
    })
    /// https://blog.liplex.de/axios-interceptor-to-refresh-jwt-token-after-expiration/
    const handleSubmit = (e) => {
        axios.post("/authentification", {
            email: user.user_email,
            password: user.user_pass
        })
            .then(res => {
                console.log(Object.keys(res.headers));
                localStorage.setItem('token', res.headers.token) // requireAuth et notNoth
                console.log('resheader', res);
                alert(`Vous êtes connecté sous le compte admin : ${user.user_email} !`)
                document.location.reload(true);
            })
            .catch(err => {
                if (err = 401) {
                    alert(`Aucun compte ne correspond,veuillez réessayer une autre saisie 
                    ou contacter un administrateur`)
                }
            });

        e.preventDefault();

    }

    const updateForm = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    useEffect(() => {

    }, [])

    return (
        <>
            <Header />
            <div className="form-container">
                <form className="formLogin" >
                    <div className="form-group">
                        <label for="exampleInputEmail1">Login</label>
                        <input
                            onChange={updateForm}
                            name="user_email"
                            type="text"
                            className="inputFormLogin"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Login"
                            value={user.user_login}
                        />
                        <small id="emailHelp" className="text-muted">
                            Nous ne partagerons jamais votre email
        </small>

                    </div>

                    <div className="form-group">
                        <label for="exampleInputPassword1">Mot de passe</label>
                        <input
                            onChange={updateForm}
                            name="user_pass"
                            type="password"
                            className="inputFormLogin"
                            id="exampleInputPassword1"
                            placeholder="Mot de passe"
                            value={user.user_pass}
                        />
                    </div>

                        <button
                            onClick={handleSubmit}
                            type="submit"
                            className="btnSend"
                        >
                            Envoyer
                     </button>
                

                </form>
            </div>
            <Footer/>
        </>

    )
}

