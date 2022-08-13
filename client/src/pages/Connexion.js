import React from "react";
import "../styles/connexion.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom';


function Connexion() {
    return (
        <div className="container">
            <form className="login-form" onSubmit={useSendForm}>
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

function useSendForm(event) {

        const user = {
            email: event.target[0].value,
            password: event.target[1].value
        };
        let navigate = useNavigate();
        event.preventDefault()

        axios.post("/loginUser", user, {withCredentials: true})
            .then(res => {
                if (res.data !== "notok") {
                    localStorage.clear();
                    localStorage.setItem("id", res.data[0]._id);
                    localStorage.setItem("lastname", res.data[0].nom);
                    localStorage.setItem("firstname", res.data[0].prenom);
                    localStorage.setItem("email", res.data[0].email);
                    localStorage.setItem("role", res.data[0].role);
                    console.log(res.data)
                    navigate('/');
                    window.location.reload()
                } else {
                    console.log('Mot de Passe incorrecte')
                }
            })
            .catch(err => console.log(err));
}
export default Connexion