import Home from "../pages/Home"
import {render} from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom'

describe('Home', () => {
    it('Should render without crash', async () => {
        render(
            <Router>
                <Home/>
            </Router>
        )
    })
})