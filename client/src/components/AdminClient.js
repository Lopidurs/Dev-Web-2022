import {useEffect, useState} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import Spinner from 'react-bootstrap/Spinner';

function AdminClient() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        /*Cette fonction va récupérer la liste des clients et l'afficher
        PRE : /
        POST : la liste des clients
        */
        axios.get("https://gabrielle-squelin-back.herokuapp.com/clients")
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
        return <div><h1>Clients :</h1><Spinner animation="border"/></div>;
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

export default AdminClient