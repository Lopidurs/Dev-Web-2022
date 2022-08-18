import ListeCours from "../components/ListeCours"
import {render} from "@testing-library/react"

describe('ListeCours', () => {
    it('Should render without crash', async () => {
        render(<ListeCours/>)
    })
})