import React from 'react'
import logo from "../assets/dressmaker.png"
import '../styles/Titre.css'

function Titre() {
    return(
    <div className={"titre"}>
        <h1>Gabrielle Squelin</h1>
        <div className={"rectangle"}></div>
        <img src={logo} alt={"logo"} />
    </div>
    )}

export default Titre