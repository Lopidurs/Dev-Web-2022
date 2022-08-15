import axios from "axios";

function Card_cours(props){
    function inscriptionCours() {
        axios.post(`http://localhost:3001/lessons/ins/${props.data.id}`,{}, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((res) => {
           if (res.data.error) alert(res.data.error)
           if (res.data.succes) alert(res.data.succes)
        })
    }
    const date = new Date(props.data.Date)

    return(
        <div className={"card-cours"}>
            <h1>{props.data.Title}</h1>
            <div>Le : {new Intl.DateTimeFormat(['ban', 'id']).format(date)}</div>
            <div>De : {props.data.BeginHour} à : {props.data.EndHour}</div>
            <h3>Description du cours:</h3>
            <div>{props.data.Description}</div>
            <button className={"bouton_plein"} onClick={inscriptionCours}>S'inscrire au cours</button>
        </div>
    )
}

export default Card_cours