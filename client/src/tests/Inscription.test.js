import Inscription from "../pages/Inscription"
import {render, fireEvent, getByRole} from "@testing-library/react"
import {BrowserRouter as Router} from 'react-router-dom'

describe('Inscription', () => {
    it('Should render without crash', async () => {
        render(
            <Router>
                <Inscription/>
            </Router>
        )
    })
    it('Should send the form with success', async () => {
        const endFormInscription = jest.fn()
        const {getByLabelText, getByRole, findByPlaceholderText} = render(<Router><Inscription/></Router>)
        fireEvent.change(findByPlaceholderText("Dupond"), {target: {value: "test1"}})
        fireEvent.change(getByLabelText("Prénom"), {target: {value: "test2"}})
        fireEvent.change(getByLabelText("E-mail"), {target: {value: "test@3"}})
        fireEvent.change(getByLabelText("Numéro de téléphone"), {target: {value: "0000 000 000"}})
        fireEvent.change(getByLabelText("Mot de passe"), {target: {value: "test4"}})
        fireEvent.change(getByLabelText("Vérification du mot de passe"), {target: {value: "test4"}})
        fireEvent.click(getByRole("button"))
        expect(endFormInscription).toBeCalled()
    })
})