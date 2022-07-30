import Presentation_propos from "../components/Presentation_propos"
import { render } from "@testing-library/react"

describe('Presentation_propos', () => {
    it('Should render without crash',async () => {
        render(<Presentation_propos />)
    })
})