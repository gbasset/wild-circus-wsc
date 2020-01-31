
import React, { useState, useEffect }  from 'react'
import axios from 'axios';
import './Login.css'
export default function Login() {

    const [user, setUser] = useState({
        user_pass: null,
        user_email: null,
    })

   const  handleSubmit = (e) => {
        axios.post("/authentification", {
            email: user.user_email,
            password: user.user_pass
        }).then(res => {
            console.log(Object.keys(res.headers));
            localStorage.setItem('token', res.headers.token) // requireAuth et notNoth
            console.log('resheader', res.headers);
            document.location.reload(true);
            
        })
        e.preventDefault();
       
    }

    const updateForm = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }

  
    return (
        <>
            <form >
                <div className="form-group">
                    <label for="exampleInputEmail1">Login</label>
                    <input
                    onChange={updateForm}
                    name="user_email"
                        type="text"
                        class="form-control"
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
                        className="form-control"
                        id="exampleInputPassword1"
                        placeholder="Mot de passe"
                        value={user.user_pass}

                    />
                </div>

                <div>

                    <button
                    onClick={handleSubmit}
                        type="submit"
                        className="btn "

                    >
                        Envoyer
        </button>
                </div>

            </form>
        </>
    )
}

