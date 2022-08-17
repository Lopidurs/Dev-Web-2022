import Admin_form_cours from "../components/Admin_form_cours"
import { render } from "@testing-library/react"

describe('Admin_form_cours', () => {
    it('Should render without crash',async () => {
        render(<Admin_form_cours />)
    })
})