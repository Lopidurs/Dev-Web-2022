import PresentationPropos from "../components/PresentationPropos"
import {render} from "@testing-library/react"

describe('PresentationPropos', () => {
    it('Should render without crash', async () => {
        render(<PresentationPropos/>)
    })
})