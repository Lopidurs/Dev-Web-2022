import FormConfection from "../components/FormConfection"
import {render} from "@testing-library/react"

describe('FormConfection', () => {
    it('Should render without crash', async () => {
        render(<FormConfection/>)
    })
})