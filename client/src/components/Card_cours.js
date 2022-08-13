function Card_cours(data){
    return(
        <div className={"card-cours"}>
            <h1>{data.titre}</h1>
            <div>Le :{data.date}</div>
            <div>De :{data.heureDebut}</div>
            <div>A :{data.heureFin}</div>
            <div>{data.description}</div>
            <button className={"bouton_plein"}>S'inscrire au cours</button>
        </div>
    )
}

export default Card_cours