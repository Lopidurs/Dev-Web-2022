import Propos from "../pages/Propos"
import { render } from "@testing-library/react"

describe('Propos', () => {
    it('Should render without crash',async () => {
        render(<Propos />)
    })
})