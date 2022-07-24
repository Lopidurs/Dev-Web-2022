import { useState } from "react";
import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    const [isNavExpanded, setIsNavExpanded] = useState(false)

    return (
        <nav className="navigation">
            <a href="/" className="brand-name">
            Gabrielle Squelin
            </a>
        <button className="hamburger" onClick={() =>{
            setIsNavExpanded(!isNavExpanded);
        }}>

            {/* icon from heroicons.com */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7"/>
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
            </ul>
        </div>
    </nav>
    );
}

export default Header