import Inscription from "../pages/Inscription"
import { render } from "@testing-library/react"

describe('Inscription', () => {
    it('Should render without crash',async () => {
        render(<Inscription />)
    })
})