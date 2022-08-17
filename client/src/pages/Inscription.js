import React from "react";
import "../styles/connexion.css"
import "../styles/inscripton.css"
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function Inscription() {
    let navigate = useNavigate();
    function sendFormInscription(event) {
        if (event.target[4].value === event.target[5].value) {
            const newUser = {
                FirstName: event.target[1].value,
                LastName: event.target[0].value,
                Email: event.target[2].value,
                Phone: event.target[3].value,
                Password: event.target[4].value
            };
            axios.post("http://localhost:3001/clients", newUser)
            navigate('/')
        } else {
            event.preventDefault()
            document.getElementById('erreur').innerText = "Vos deux mots de passe sont différents!";
        }
    }

    return (
        <div className="container">
            <form className="register-form" onSubmit={sendFormInscription}>
                <h1>Inscription</h1>
                <div className={"nom"}>
                    <label htmlFor="Nom">Nom</label>
                    <input type="text" name="Nom" placeholder="Dupond" autoComplete="off" required/>
                </div>
                <div className={"prenom"}>
                    <label htmlFor="Prénom">Prénom</label>
                    <input type="text" name="Prénom" placeholder="Bernard" autoComplete="off" required/>
                </div>
                <div className={"email"}>
                    <label htmlFor="e-mail">E-mail</label>
                    <input type="email" name="e-mail" placeholder="example@gmail.com" autoComplete="off" required/>
                </div>
                <div className={"phone"}>
                    <label htmlFor="phone">Numéro de téléphone</label>
                    <input type="tel" name="phone" placeholder="04** *** ***" autoComplete="off" pattern={"[0-9]{4} [0-9]{3} [0-9]{3}"} required/>
                </div>
                <div className={"password"}>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" placeholder="●●●●●●●●●" autoComplete="off"  required/>
                </div>
                <div id={"verfication"} className={"verfication"}>
                    <label htmlFor="Vpassword">Vérification du mot de passe</label>
                    <input type="password" name="Vpassword" placeholder="●●●●●●●●●" autoComplete="off" required/>
                    <small id={"erreur"}></small>
                </div>
                <button type="submit" className="bouton_plein">S'inscrire</button>
            </form>
        </div>
    )
}
export default Inscription