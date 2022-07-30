import Titre from "../components/Titre"
import { render } from "@testing-library/react"

describe('Titre', () => {
    it('Should render without crash',async () => {
        render(<Titre />)
    })
})