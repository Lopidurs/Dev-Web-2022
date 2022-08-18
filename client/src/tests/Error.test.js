import Error from "../components/Error"
import {render} from "@testing-library/react"

describe('Error', () => {
    it('Should render without crash', async () => {
        render(<Error/>)
    })
})