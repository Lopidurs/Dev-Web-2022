import Presentation_confection from "../components/Presentation_confection"
import { render } from "@testing-library/react"

describe('Presentation_confection', () => {
    it('Should render without crash',async () => {
        render(<Presentation_confection />)
    })
})