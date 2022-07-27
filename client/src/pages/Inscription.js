import React from "react";
import "../styles/connexion.css"
import "../styles/inscripton.css"

function Inscription() {
    return (
        <div className="container">
            <form className="register-form">
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
                    <input type="text" name="e-mail" placeholder="example@gmail.com" autoComplete="off" required/>
                </div>
                <div className={"password"}>
                    <label htmlFor="password">Mot de passe</label>
                    <input type="password" name="password" placeholder="●●●●●●●●●" autoComplete="off" required/>
                </div>
                <div className={"verfication"}>
                    <label htmlFor="Vpassword">Vérification du mot de passe</label>
                    <input type="password" name="Vpassword" placeholder="●●●●●●●●●" autoComplete="off" required/>
                </div>
                <button type="submit" className="bouton_plein">S'inscrire</button>
            </form>
        </div>
    )
}

export default Inscription