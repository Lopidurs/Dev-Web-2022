import AdminConfection from "../components/AdminConfection"
import {render} from "@testing-library/react"

describe('AdminConfection', () => {
    it('Should render without crash', async () => {
        render(<AdminConfection/>)
    })
})