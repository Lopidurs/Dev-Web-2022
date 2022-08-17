import Card_confection from "../components/Card_confection"
import { render } from "@testing-library/react"

describe('Card_confection', () => {
    it('Should render without crash and display the correct information',async () => {
        const { getByTestId } = render(<Card_confection data=	{
            {
                "id": 3,
                "Type": "3pièces",
                "Occasion": "soirée",
                "Date": "2022-08-27T00:00:00.000Z",
                "Description": "Pour être le plus beau!",
                "UriPicture": null,
                "createdAt": "2022-08-14T21:23:24.000Z",
                "updatedAt": "2022-08-14T21:23:24.000Z",
                "ClientId": 5,
                "Client": {
                    "id": 5,
                    "FirstName": "Nathan",
                    "LastName": "Admin",
                    "Email": "admin@nathan",
                    "Phone": "0000 000 000",
                    "role": 1,
                    "Password": "$2b$10$szwT6/oY.6Dh4tl7tlwvK.cCJ5xbten4r2m.09mr0VsDRHCQ4zJSa",
                    "createdAt": "2022-08-13T22:02:26.000Z",
                    "updatedAt": "2022-08-13T22:02:26.000Z"
                }
            }
        } />);
        const Type = getByTestId("Type").textContent
        expect(Type).toEqual("3pièces")
        const Occasion = getByTestId("Occasion").textContent
        expect(Occasion).toEqual("soirée")
        const Client = getByTestId("Client").textContent
        expect(Client).toEqual("Nathan Admin")
        const Date = getByTestId("Date").textContent
        expect(Date).toEqual("27/8/2022")
        const Description = getByTestId("Description").textContent
        expect(Description).toEqual("Pour être le plus beau!")
    })
})