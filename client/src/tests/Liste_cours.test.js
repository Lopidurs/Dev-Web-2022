import Liste_cours from "../components/Liste_cours"
import { render } from "@testing-library/react"

describe('Liste_cours', () => {
    it('Should render without crash',async () => {
        render(<Liste_cours />)
    })
})