import App from "../pages/App"
import { render } from "@testing-library/react"
import { BrowserRouter as Router} from 'react-router-dom'

describe('App', () => {
    it('Should render without crash',async () => {
        render(
                <App />
        )
    })
})