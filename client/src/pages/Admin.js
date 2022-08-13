import React from "react";
import Admin_confection from "../components/Admin_confection";
import Admin_client from "../components/Admin_client";
import Error from "../components/Error";
import Admin_cours from "../components/Admin_cours";


function Admin() {

    return (
        <div className="container">
        {localStorage.getItem('role') == 1 ?
            <div><Admin_cours /><Admin_confection /><Admin_client /></div>:
                <div><Error /></div>}
        </div>
    )
}

export default Admin