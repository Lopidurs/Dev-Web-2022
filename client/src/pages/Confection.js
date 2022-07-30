import React from "react";
import "../styles/Confection.css"
import Form_confection from "../components/Form_confection";
import Presentation_confection from "../components/Presentation_confection";

function Confection() {
    return (
        <div className="container">
            <div className={"confection"}>
                <Form_confection />
                <Presentation_confection/>
            </div>
        </div>
    )
}

export default Confection