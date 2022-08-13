import Admin from "../pages/Admin"
import { render } from "@testing-library/react"

describe('Admin', () => {
    it('Should render without crash',async () => {
        render(<Admin />)
    })
})