import React from "react";
import Admin_confection from "../components/Admin_confection";
import Admin_client from "../components/Admin_client";
import Error from "../components/Error";
import Admin_cours from "../components/Admin_cours";
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import Admin_form_cours from "../components/Admin_form_cours";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../styles/Admin.css"


function Admin() {
    const [role, setRole] = useState(null);
    useEffect(() => {
        axios.post("http://localhost:3001/clients/verify", {accessToken: localStorage.getItem("accessToken")})
            .then((res) => {
                setRole(res.data)
        })
    })
    if (role === 1) {
        return (
            <div className={"container"}>
                <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                >
                    <Tab eventKey="Admin_form_cours" title="Création cours">
                        <Admin_form_cours />
                    </Tab>
                    <Tab eventKey="Admin_cours" title="Liste des cours">
                        <Admin_cours/>
                    </Tab>
                    <Tab eventKey="Admin_confection" title="Liste des devis">
                        <Admin_confection/>
                    </Tab>
                    <Tab eventKey="Admin_client" title="Liste des clients">
                        <Admin_client/>
                    </Tab>
                </Tabs>
            </div>)
    } else {
        return (<div className={"container"}><Error/></div>)
    }
}

export default Admin