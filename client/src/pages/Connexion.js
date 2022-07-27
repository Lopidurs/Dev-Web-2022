import React from "react"
import "../styles/connexion.css"

function Connexion() {
    return (
        <div className="container">
            <form className="login-form">
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