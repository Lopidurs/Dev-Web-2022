import {useEffect, useState} from "react";
import Spinner from "react-bootstrap/Spinner";
import Card_cours from "./Card_cours";
import axios from "axios";

function Liste_cours(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/lessons")
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
        return <div><h1>Liste des cours :</h1>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div><h1>Liste des cours :</h1><Spinner animation="border" /></div>;
    } else {
        return (
            <div>
                {items.map((item, index) => {
                    return (
                        <Card_cours key={`${index} - ${item}`} data={item}/>
                    )
                })}
            </div>
        )

}}

export default Liste_cours