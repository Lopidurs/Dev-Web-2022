import PresentationConfection from "../components/PresentationConfection"
import {render} from "@testing-library/react"

describe('PresentationConfection', () => {
    it('Should render without crash', async () => {
        render(<PresentationConfection/>)
    })
})