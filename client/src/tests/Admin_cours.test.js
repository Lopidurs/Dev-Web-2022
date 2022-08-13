import Admin_cours from "../components/Admin_cours"
import { render } from "@testing-library/react"

describe('Admin_cours', () => {
    it('Should render without crash',async () => {
        render(<Admin_cours />)
    })
})