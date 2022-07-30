import Cours from "../pages/Cours"
import { render } from "@testing-library/react"

describe('Cours', () => {
    it('Should render without crash',async () => {
        render(<Cours />)
    })
})