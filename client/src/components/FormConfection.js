import axios from "axios";


function FormConfection() {
    function sendFormConf(event) {
        /*Cette fonction va récupérer les données entrer dans le formulaire et l'envoyer au backend avec le token de l'utilisateur
        PRE : les données du formulaire
        POST : /
        */
        axios.post("https://gabrielle-squelin-back.herokuapp.com/commands", {
            Type: event.target[0].value,
            Occasion: event.target[1].value,
            Date: event.target[2].value,
            Description: event.target[3].value,
            Image: event.target[4].value,
        }, {
            headers: {
                accessToken: localStorage.getItem("accessToken")
            }
        }).then((res) => {
            if (res.data.error) {
                event.preventDefault()
                document.getElementById('comConfection').innerText = "Veuillez vous connecter!";
            } else {
                document.getElementById('comConfection').innerText = "Votre demande à été prit en compte";
            }
        })
    }

    return (
        <form className="confection-form" onSubmit={sendFormConf}>
            <h1>Envoyer une demande pour une confection sur mesure</h1>
            <div className={"type-vêtement"}>
                <label htmlFor="type-vêtement">Type de vêtements shouaiter</label>
                <select name="type-vêtement" required>
                    <optgroup label={"Homme"}>
                        <option value={"veste"}>Veste</option>
                        <option value={"gillet"}>Gillet</option>
                        <option value={"pantalon"}>Pantalon</option>
                        <option value={"chemise"}>Chemise</option>
                        <option value={"3pièces"}>Costume trois pièces</option>
                        <option value={"autre_homme"}>Autre</option>
                    </optgroup>
                    <optgroup label={"Femme"}>
                        <option value={"robe"}>Robe</option>
                        <option value={"jupe"}>Jupe</option>
                        <option value={"chemisier"}>Chemise/chemisier</option>
                        <option value={"autre_femme"}>Autre</option>
                    </optgroup>
                    <optgroup label={"enfant"}>
                        <option value={"autre_enfant"}>Autre</option>
                    </optgroup>
                </select>
            </div>
            <div className={"occasion"}>
                <label htmlFor="occasion">Pour quel occasion</label>
                <select name="occasion" required>
                    <option value={"marriage"}>Mariage</option>
                    <option value={"soirée"}>Soirée</option>
                    <option value={"déguisement"}>Déguisement</option>
                    <option value={"travail"}>Travail</option>
                    <option value={"normal"}>Vie de tous les jours</option>
                    <option value={"autre"}>Autre</option>
                </select>
            </div>
            <div className={"date"}>
                <label htmlFor="date">Date butoire</label>
                <input type="date" name="date" required/>
            </div>
            <div className={"commentaire"}>
                <label htmlFor="commentaire">Commentaire suplémentaire</label>
                <textarea name="commentaire" rows={10} cols={50}/>
            </div>
            <div className={"ajout-fichier"}>
                <label htmlFor="file-upload" className={"bouton_transparent"}>Ajouter une photo
                    <input type="file" name={"Image"} id="file-upload" accept={"image/png, image/jpeg"}/>
                </label>
            </div>
            <button type="submit" className="bouton_plein">Envoyer votre demande</button>
            <div id={"comConfection"}></div>
        </form>
    )
}

export default FormConfection