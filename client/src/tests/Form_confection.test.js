import Form_confection from "../components/Form_confection"
import { render } from "@testing-library/react"

describe('Form_confection', () => {
    it('Should render without crash',async () => {
        render(<Form_confection />)
    })
})