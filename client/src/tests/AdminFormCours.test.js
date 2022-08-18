import AdminFormCours from "../components/AdminFormCours"
import {render} from "@testing-library/react"

describe('AdminFormCours', () => {
    it('Should render without crash', async () => {
        render(<AdminFormCours/>)
    })
})