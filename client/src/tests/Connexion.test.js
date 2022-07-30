import Connexion from "../pages/Connexion"
import { render } from "@testing-library/react"

describe('Connexion', () => {
    it('Should render without crash',async () => {
        render(<Connexion />)
    })
})