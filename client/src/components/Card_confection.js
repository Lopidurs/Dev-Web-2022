function Card_confection(data){
    return(
        <div className={"card-confection"}>
            <h2>Type de vêtements shouaiter :</h2>
            <div>{data.type_vetement}</div>
            <h2>Occasion :</h2>
            <div>{data.occasion}</div>
            <h2>Pour :</h2>
            <div>{data.prenom} {data.nom}</div>
            <h2>Date butoire :</h2>
            <div>{data.date}</div>
            <h2>Commentaire :</h2>
            <div>{data.commentaire}</div>
            <h2>Photo :</h2>
            <div>{data.photo}</div>
        </div>
    )
}

export default Card_confection