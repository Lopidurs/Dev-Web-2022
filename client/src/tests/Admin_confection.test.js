import Admin_confection from "../components/Admin_confection"
import { render } from "@testing-library/react"

describe('Admin_confection', () => {
    it('Should render without crash',async () => {
        render(<Admin_confection />)
    })
})