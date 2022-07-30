import Footer from "../components/Footer"
import { render } from "@testing-library/react"

describe('Footer', () => {
    it('Should render without crash',async () => {
        render(<Footer />)
    })
})