import {useEffect, useState} from "react";
import Spinner from "react-bootstrap/Spinner";
import CardCours from "./CardCours";
import axios from "axios";

function ListeCours() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);

    useEffect(() => {
        /*Cette fonction va récupérer la liste des cours et l'afficher
        PRE : /
        POST : /
        */
        axios.get("https://gabrielle-squelin-back.herokuapp.com/lessons")
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
        return <div><h1>Liste des cours :</h1><Spinner animation="border"/></div>;
    } else {
        return (
            <div>
                {items.map((item, index) => {
                    return (
                        <CardCours key={`${index} - ${item}`} data={item}/>
                    )
                })}
            </div>
        )

    }
}

export default ListeCours