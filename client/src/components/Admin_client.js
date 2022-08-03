import {useEffect, useState} from "react";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

function Admin_client() {
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
        return <div><h1>Clients :</h1>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div><h1>Clients :</h1><Spinner animation="border" /></div>;
    } else {
        return (
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
                {items.map(item, index => {
                    return (
                        <tr> key={`${index} - ${item}`}>
                            <td>{index}</td>
                            <td>{item.prenom}</td>
                            <td>{item.nom}</td>
                            <td>{item.email}</td>
                            <td>{item.telephone}</td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        )
    }
}

export default Admin_client