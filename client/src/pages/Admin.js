import React from "react";
import AdminConfection from "../components/AdminConfection";
import Admin_client from "../components/AdminClient";
import Error from "../components/Error";
import AdminCours from "../components/AdminCours";
import axios from "axios";
import {useEffect} from "react";
import {useState} from "react";
import AdminFormCours from "../components/AdminFormCours";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "../styles/Admin.css"


function Admin() {
    const [role, setRole] = useState(null);
    useEffect(() => {
        axios.post("https://gabrielle-squelin-back.herokuapp.com/clients/verify", {accessToken: localStorage.getItem("accessToken")})
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
                    <Tab eventKey="AdminFormCours" title="Création cours">
                        <AdminFormCours/>
                    </Tab>
                    <Tab eventKey="AdminCours" title="Liste des cours">
                        <AdminCours/>
                    </Tab>
                    <Tab eventKey="AdminConfection" title="Liste des devis">
                        <AdminConfection/>
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