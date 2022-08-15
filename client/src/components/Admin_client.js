import {useEffect, useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

function Admin_client() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/clients")
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
        return <div><h1>Clients :</h1>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div><h1>Clients :</h1><Spinner animation="border" /></div>;
    } else {
        return (
            <>
            <h1>Liste des clients :</h1>
            <Table striped bordered hover className={"table_clients"}>

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
                {items.map((value, index) => {
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
            </>
        )
    }
}

export default Admin_client