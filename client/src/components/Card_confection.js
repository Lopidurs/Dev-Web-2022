function Card_confection(props){
    const date = new Date(props.data.Date)
    return(
        <div className={"card-confection"}>
            <h2>Type de vêtements shouaiter :</h2>
            <div data-testid={"Type"}>{props.data.Type}</div>
            <h2>Occasion :</h2>
            <div data-testid={"Occasion"}>{props.data.Occasion}</div>
            <h2>Pour :</h2>
            <div data-testid={"Client"}>{props.data.Client.FirstName} {props.data.Client.LastName}</div>
            <h2>Date butoire :</h2>
            <div data-testid={"Date"}>{new Intl.DateTimeFormat(['ban', 'id']).format(date)}</div>
            <h2>Commentaire :</h2>
            <div data-testid={"Description"}>{props.data.Description}</div>
            <h2>Photo :</h2>
            <div>{props.data.Picture}</div>
        </div>
    )
}

export default Card_confection