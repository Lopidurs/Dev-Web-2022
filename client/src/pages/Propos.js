import React from "react";
import "../styles/Propos.css"
import Presentation_propos from "../components/Presentation_propos";
import Map from "../components/Map";

function Propos() {
    return (
        <div className="container">
            <div className={"container-propos"}>
                <Presentation_propos />
                <Map />
            </div>
        </div>
    )
}

export default Propos