import Admin_client from "../components/AdminClient"
import {render} from "@testing-library/react"

describe('AdminClient', () => {
    it('Should render without crash', async () => {
        render(<AdminClient/>)
    })
})