import Card_confection from "../components/Card_confection"
import { render } from "@testing-library/react"

describe('Card_confection', () => {
    it('Should render without crash',async () => {
        render(<Card_confection />)
    })
})