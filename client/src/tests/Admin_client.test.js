import Admin_client from "../components/Admin_client"
import { render } from "@testing-library/react"

describe('Admin_client', () => {
    it('Should render without crash',async () => {
        render(<Admin_client />)
    })
})