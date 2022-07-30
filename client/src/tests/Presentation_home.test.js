import Presentation_home from "../components/Presentation_home"
import { render } from "@testing-library/react"
import { BrowserRouter as Router} from 'react-router-dom'

describe('Presentation_home', () => {
    it('Should render without crash',async () => {
        render(
            <Router>
                <Presentation_home />
            </Router>
        )
    })
})