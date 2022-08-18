import Connexion from "../pages/Connexion"
import {render} from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom'

describe('Connexion', () => {
    it('Should render without crash', async () => {
        render(<Router><Connexion/></Router>)
    })
})