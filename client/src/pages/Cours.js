import ListeCours from "../components/ListeCours";
import Presentation_cours from "../components/PresentationCours";
import "../styles/Cours.css"

function Cours() {
    return (
        <div className="container">
            <Presentation_cours/>
            <ListeCours/>
        </div>
    )
}

export default Cours