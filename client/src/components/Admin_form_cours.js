import axios from "axios";

function Admin_form_cours(){
    function sendFormLesson(event) {
        event.preventDefault()
        axios.post("http://localhost:3001/lessons", {
            Title: event.target[0].value,
            Date: event.target[1].value,
            BeginHour: event.target[2].value,
            EndHour: event.target[3].value,
            Description: event.target[4].value,
            Places: event.target[5].value,
        },{
            headers: {
                accessToken: localStorage.getItem("accessToken")}
        }).then((res) => {
            console.log(res)
        })
    }

    return(
        <div>
            <h1>Création d'un nouveau cours :</h1>
            <form className="Admin_form_cours" onSubmit={sendFormLesson}>
                <div className={"titre"}>
                    <label htmlFor="Title">Titre</label>
                    <input type="text" name="Title" autoComplete="off" required/>
                </div>
                <div className={"date"}>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" required/>
                </div>
                <div className={"heure"}>
                    <label htmlFor="heurFin">Heure de début</label>
                    <input type="time" name="BeginHour" required/>
                </div>
                <div className={"heure"}>
                    <label htmlFor="heurFin">Heure de fin</label>
                    <input type="time" name="EndHour" required/>
                </div>
                <div className={"commentaire"}>
                    <label htmlFor="commentaire">Description</label>
                    <textarea name="Description" rows={10} cols={50}/>
                </div>
                <div className={"Places"}>
                    <label htmlFor="Places">Nombre de places</label>
                    <input type="number" name="Places" required/>
                </div>
                <button type="submit" className="bouton_plein">Créer le cours</button>
                <div id={"comConfection"}></div>
            </form>

        </div>)
}

export default Admin_form_cours