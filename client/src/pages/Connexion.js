import React from "react";
import "../styles/connexion.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';



function Connexion() {
    let navigate = useNavigate();

    function sendForm(event) {

        const user = {
            Email: event.target[0].value,
            Password: event.target[1].value
        };

        event.preventDefault()

        axios.post("http://localhost:3001/clients/login", user)
            .then(res => {
                if (res.data.error) {
                    alert(res.data.error)
                }
                else {
                    localStorage.setItem("accessToken", res.data)
                    navigate('/')
                    window.location.reload()
                }
            })
    }

    return (
        <div className="container">
            <form className="login-form" onSubmit={sendForm}>
                <h1>Bienvenue</h1>
                <div>
                    <label htmlFor="e-mail">E-mail</label>
                    <input type="text" name="e-mail" placeholder="example@gmail.com" autoComplete="off" required/>
                </div>
                <div>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" id="password" placeholder="●●●●●●●●●" autoComplete="off" required/>
                </div>
                <button type="submit" className="bouton_plein">Se Connecter</button>
            </form>
        </div>
    )
}


export default Connexion