function Card_confection(props){
    return(
        <div className={"card-confection"}>
            <h2>Type de vêtements shouaiter :</h2>
            <div>{props.data.Type}</div>
            <h2>Occasion :</h2>
            <div>{props.data.Occasion}</div>
            <h2>Pour :</h2>
            <div>{props.data.Client.FirstName} {props.data.Client.LastName}</div>
            <h2>Date butoire :</h2>
            <div>{props.data.Date}</div>
            <h2>Commentaire :</h2>
            <div>{props.data.Description}</div>
            <h2>Photo :</h2>
            <div>{props.data.Picture}</div>
        </div>
    )
}

export default Card_confection