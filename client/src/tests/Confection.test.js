import Confection from "../pages/Confection"
import { render } from "@testing-library/react"

describe('Confection', () => {
    it('Should render without crash',async () => {
        render(<Confection />)
    })
})