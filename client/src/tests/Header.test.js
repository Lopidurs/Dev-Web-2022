import Header from "../components/Header"
import { render } from "@testing-library/react"
import { BrowserRouter as Router} from 'react-router-dom'

describe('Header', () => {
    it('Should render without crash',async () => {
        render(
            <Router>
                <Header />
            </Router>
            )
    })
})