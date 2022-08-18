import {useState, useEffect} from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner';
import axios from "axios";

import CardConfection from "./CardConfection";

function AdminConfection() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);


    useEffect(() => {
        /*Cette fonction va récupérer la liste des commandes et l'afficher
        PRE : /
        POST : la liste des commandes
        */
        axios.get("https://gabrielle-squelin-back.herokuapp.com/commands")
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.data);

                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div><h1>Liste des devis :</h1>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div><h1>Liste des devis :</h1><Spinner animation="border"/></div>;
    } else {
        return (
            <div className={"admin-confection"}>
                <h1>Liste des devis :</h1>
                <Tab.Container classname={"tab-devis"} id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {items.map((item, index) => {
                                    let date = new Date(item.Date)
                                    return (
                                        <Nav.Item>
                                            <Nav.Link key={`${index} - ${item}`} eventKey={`${index} - ${item}`}>
                                                Un(e) <b>{item.Type}</b> pour <b>{item.Occasion}</b> avant
                                                le: <b>{new Intl.DateTimeFormat(['ban', 'id']).format(date)}</b>
                                            </Nav.Link>
                                        </Nav.Item>
                                    )
                                })}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                {items.map((item, index) => {
                                    return (
                                        <Tab.Pane key={`${index} - ${item}`} eventKey={`${index} - ${item}`}>
                                            <CardConfection data={item}/>
                                        </Tab.Pane>
                                    )
                                })}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}


export default AdminConfection