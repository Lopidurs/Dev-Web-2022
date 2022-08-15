import { useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import '../styles/header.css'
import '../styles/boutons.css'
import React from "react";

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    let navigate = useNavigate()

    function logout() {
        localStorage.removeItem("accessToken")
        navigate('/')
        window.location.reload()
    }
    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
            Gabrielle Squelin
            </a>
            <svg className="logo" width="119.07mm" height="100.18mm" version="1.1" viewBox="0 0 119.07 100.18" xmlns="http://www.w3.org/2000/svg">
                <path d="m59.704 0.0024834c-4.9804 0.0518-17.665 0.90947-23.265 2.829-16.705 5.7262-27.575 14.452-33.497 31.089-6.7592 18.99-2.2897 41.337 17.775 56.241 2.741 2.036 2.6183 5.8085 2.6183 5.8085s24.9 4.327 37.976 4.2065c20.95-0.19315 38.571-3.5261 46.119-9.556 0 0-1.0388-2.516-1.4082-4.5925 0 0-0.91927-20.616 0.51676-22.932 1.9345-3.12 8.679-1.4297 11.849-2.8066 1.3325-0.57869 0.55194-4.3422-0.90072-4.3274l-24.967 0.25373c-8.038-5.9321-37.937-15.497-49.295-25.809-8.4094-7.6349-7.0208-14.999 3.0437-21.207 11.998-7.4011 30.684-1.5541 36.209 1.9032 7.1712 4.4881 11.534 12.513 15.651 16.31 0.33033 0.3047 6.7525-0.47505 6.6228-1.0123l-5.3511-22.17c-15.33-0.0794-26.97-4.3601-39.697-4.2276zm-38.044 31.386c9.5784 14.245 24.732 20.683 31.713 23.078 11.582 3.9745 21.61 6.6296 26.513 10.871 8.6956 7.5234 7.7449 16.433 1.2945 22.964-4.8716 4.9326-12.264 5.7416-19.421 5.4565-7.9307-0.31598-15.72-2.2124-22.686-6.4755-8.6333-5.2835-16.317-15.578-19.614-26.285-3.5808-11.628-0.77662-20.819 2.2014-29.61z" fill="#a4aa3c"/>
            </svg>
        <button className="hamburger" onClick={() =>{
            setIsNavExpanded(!isNavExpanded);
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
        </button>
        <div className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>

                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/confection">Confection</Link>
                    </li>
                    <li>
                        <Link to="/cours">Cours</Link>
                    </li>
                    <li>
                        <Link to="/propos">A propos</Link>
                    </li>
                    <li>
                        <Link to="/connexion" className={"connexion-mobile"}>connexion</Link>
                    </li>
                    <li>
                        <Link to="/inscription" className={"connexion-mobile"}>inscription</Link>
                    </li>
                </ul>

        </div>
            {localStorage.getItem("accessToken") === null ? <div className={"groupe_button"}>
                <button id={"myBtn"} className={"bouton_transparent"}><Link to="/inscription">S'inscrire</Link></button>
                <button className={"bouton_plein"}><Link to="/connexion">Se connecter</Link></button>
            </div> : <div className={"groupe_button"}><button id={"btnDeco"} className={"bouton_plein"} onClick={logout}>Se déconnecter</button> </div>
            }
    </nav>
    );
}

export default Header