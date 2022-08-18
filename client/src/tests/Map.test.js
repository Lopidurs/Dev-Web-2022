import Map from "../components/Map"
import {render} from "@testing-library/react"

describe('Map', () => {
    it('Should render without crash', async () => {
        render(<Map/>)
    })
})