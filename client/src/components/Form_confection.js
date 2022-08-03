function Form_confection(){
    return(
        <form className="confection-form">
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
                <input type="date" name="date"/>
            </div>
            <div className={"commentaire"}>
                <label htmlFor="commentaire">Commentaire suplémentaire</label>
                <textarea name="commentaire" rows={10} cols={50}/>
            </div>
            <div className={"ajout-fichier"}>
                <label htmlFor="file-upload" className={"bouton_transparent"}>Ajouter une photo
                    <input type="file" id="file-upload" accept={"image/png, image/jpeg"}/>
                </label>
            </div>
            <button type="submit" className="bouton_plein">Envoyer votre demande</button>
        </form>
    )
}

export default Form_confection