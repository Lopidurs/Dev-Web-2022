import React from "react";
import "../styles/Propos.css"
import PresentationPropos from "../components/PresentationPropos";
import Map from "../components/Map";

function Propos() {
    return (
        <div className="container">
            <div className={"container-propos"}>
                <PresentationPropos/>
                <Map/>
            </div>
        </div>
    )
}

export default Propos