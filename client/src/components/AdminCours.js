import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import Table from "react-bootstrap/Table";
import Tab from "react-bootstrap/Tab";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";

function AdminCours() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        /*Cette fonction va récupérer la liste des cours et l'afficher
        PRE : /
        POST : la liste des cours
        */
        axios.get("https://gabrielle-squelin-back.herokuapp.com/lessons/admin")
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
        return <div><h1>Cours :</h1>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div><h1>Cours :</h1><Spinner animation="border"/></div>;
    } else {
        return (
            <div className={"admin-cours"}>
                <h1>Cours :</h1>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {items.map((item, index) => {
                                    return (
                                        <Nav.Item>
                                            <Nav.Link key={`${index} - ${item}`} eventKey={`${index} - ${item}`}>
                                                <h2>{item.Title}</h2>
                                                <div>Places restantes: {item.Places}</div>
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
                                            <h2>Titre :</h2>
                                            <div>{item.Title}</div>
                                            <h2>Date :</h2>
                                            <div>{item.Date}</div>
                                            <h2>Heure de début :</h2>
                                            <div>{item.BeginHour}</div>
                                            <h2>Heure de fin :</h2>
                                            <div>{item.EndHour}</div>
                                            <h2>Description :</h2>
                                            <div>{item.Description}</div>
                                            <h2>Places restantes :</h2>
                                            <div>{item.Places}</div>
                                            <h2>Inscrits</h2>
                                            <Table striped bordered hover>
                                                <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Prénom</th>
                                                    <th>Nom</th>
                                                    <th>Email</th>
                                                    <th>Téléphone</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                {item.Clients.map((value, index) => {
                                                    return (
                                                        <tr key={`${index} - ${value}`}>
                                                            <td>{index}</td>
                                                            <td>{value.FirstName}</td>
                                                            <td>{value.LastName}</td>
                                                            <td>{value.Email}</td>
                                                            <td>{value.Phone}</td>
                                                        </tr>
                                                    )
                                                })}
                                                </tbody>
                                            </Table>
                                        </Tab.Pane>
                                    )
                                })}
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>)
    }
}

export default AdminCours