import {useEffect, useState} from "react";
import Spinner from "react-bootstrap/Spinner";
import Card_cours from "./Card_cours";

function Liste_cours(){
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
        return <div><h1>Liste des cours :</h1>Erreur : {error.message}</div>;
    } else if (!isLoaded) {
        return <div><h1>Liste des cours :</h1><Spinner animation="border" /></div>;
    } else {
        return (
            <div>
                {items.map(item, index => {
                    return (
                        <Card_cours key={`${index} - ${item}`} data={item}/>
                    )
                })}
            </div>
        )

}}

export default Liste_cours