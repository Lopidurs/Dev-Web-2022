import React from "react";
import Admin_confection from "../components/Admin_confection";
import Admin_client from "../components/Admin_client";

function Admin() {

    return (
        <div className="container">
            <Admin_confection />
            <Admin_client />
        </div>
    )
}

export default Admin