import axios from "axios";

function CardCours(props) {
    function inscriptionCours() {
        /*Cette fonction va envoyer au backend le token de l'utilisateur qui veut s'inscrire au cours et le prévenir
         en cas de succès ou d'échec de inscription
        PRE : /
        POST : /
        */
        axios.post(`https://gabrielle-squelin-back.herokuapp.com/lessons/ins/${props.data.id}`, {}, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((res) => {
            if (res.data.error) alert(res.data.error)
            if (res.data.succes) alert(res.data.succes)
        })
    }

    const date = new Date(props.data.Date)

    return (<div className={"card-cours"}>
            <h1>{props.data.Title}</h1>
            <div>Le : {new Intl.DateTimeFormat(['ban', 'id']).format(date)}</div>
            <div>De : {props.data.BeginHour} à : {props.data.EndHour}</div>
            <h3>Description du cours:</h3>
            <div>{props.data.Description}</div>
            <button className={"bouton_plein"} onClick={inscriptionCours}>S'inscrire au cours</button>
        </div>)
}

export default CardCours