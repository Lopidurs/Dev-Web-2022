import Header from "../components/Header"
import {fireEvent, getByTestId, render} from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom'

describe('Header', () => {
    it('Should render without crash', async () => {
        render(
            <Router>
                <Header/>
            </Router>
        )
    })

    it('Should logout when we click the button', () => {
        localStorage.setItem("accessToken", "test")
        const {getByRole} = render(<Router><Header/></Router>)
        const logoutBttn = getByRole("button", {name: "Se déconnecter"})
        fireEvent.click(logoutBttn)
        expect(location.pathname).toBe('/');
        expect(localStorage.getItem("accessToken")).toBe(null)
    })

    it('Should change the class when we click the button', () => {
        const {container, getByRole} = render(<Router><Header/></Router>)
        expect(container.getElementsByClassName("navigation-menu expanded").length).toBe(0);
        const navBttn = getByRole("button", {name: ""})
        fireEvent.click(navBttn)
        expect(container.getElementsByClassName("navigation-menu expanded").length).toBe(1);
    })
})