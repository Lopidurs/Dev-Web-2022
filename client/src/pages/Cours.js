import Liste_cours from "../components/Liste_cours";
import Presentation_cours from "../components/Presentation_cours";
import "../styles/Cours.css"

function Cours() {
    return (
        <div className="container">
            <Presentation_cours />
            <Liste_cours />
        </div>
    )
}

export default Cours