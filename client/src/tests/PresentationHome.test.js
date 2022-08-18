import PresentationHome from "../components/PresentationHome"
import {render} from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom'

describe('PresentationHome', () => {
    it('Should render without crash', async () => {
        render(
            <Router>
                <PresentationHome/>
            </Router>
        )
    })
})