import { useState, useEffect } from 'react'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner';

import Card_confection from "./Card_confection";

function Admin_confection(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch("https://api.example.com/items")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result.items);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div><h1>Demandes :</h1>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div><h1>Demandes :</h1><Spinner animation="border" /></div>;
    } else {
        return (
            <div className={"admin-confection"}>
                <h1>Demandes :</h1>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                {items.map(item, index => {
                                    return (
                                        <Nav.Item>
                                            <Nav.Link key={`${index} - ${item}`} eventKey={`${index} - ${item}`}>
                                                Un(e) <b>{item.type_vetement}</b> pour <b>{item.occasion}</b> avant
                                                le: <b>{item.date}</b>
                                            </Nav.Link>
                                        </Nav.Item>
                                    )
                                })}
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                {items.map(item, index => {
                                    return (
                                        <Tab.Pane key={`${index} - ${item}`} eventKey={`${index} - ${item}`}>
                                            <Card_confection data={item} />
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


export default Admin_confection