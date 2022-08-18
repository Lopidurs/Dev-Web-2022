import React from "react";
import "../styles/Confection.css"
import FormConfection from "../components/FormConfection";
import PresentationConfection from "../components/PresentationConfection";

function Confection() {
    return (
        <div className="container">
            <div className={"confection"}>
                <FormConfection/>
                <PresentationConfection/>
            </div>
        </div>
    )
}

export default Confection