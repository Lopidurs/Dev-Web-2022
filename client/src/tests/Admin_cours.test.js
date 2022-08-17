import Admin_cours from "../components/Admin_cours"
import {render} from "@testing-library/react"
import {rest} from "msw"
import {setupServer} from "msw/node"


describe('Admin_cours', () => {
    const server = setupServer(rest.get('http://localhost:3001/lessons/admin', (req, res, ctx) => {
        return res(ctx.json([{
            id: 1,
            Title: "Cours de coupe",
            Date: "2022-08-13T18:09:04.000Z",
            BeginHour: "19:00:00",
            EndHour: "20:00:00",
            Description: "Cours pour apprendre à couper correctement.",
            Places: 9973,
            createdAt: "2022-08-15T15:29:21.000Z",
            updatedAt: "2022-08-16T12:18:40.000Z",
            Clients: [{
                id: 5,
                FirstName: "Nathan",
                LastName: "Admin",
                Email: "admin@nathan",
                Phone: "0000 000 000",
                role: 1,
                Password: "$2b$10$szwT6/oY.6Dh4tl7tUwvK.cCJ5xbten4r2m.09mr0VsDRHCQ4zJSa",
                createdAt: "2022-08-13T22:02:26.000Z",
                updatedAt: "2022-08-13T22:02:26.000Z",
                ClientsLessons: {
                    createdAt: "2022-08-15T17:52:49.000Z",
                    updatedAt: "2022-08-15T17:52:49.000Z",
                    ClientId: 5,
                    LessonId: 1
                }
            }]
        }, {
            id: 2,
            Title: "Cours de coupe 2",
            Date: "2022-08-28T00:00:00.000Z",
            BeginHour: "19:00:00",
            EndHour: "20:00:00",
            Description: "La suite du cour",
            Places: 0,
            createdAt: "2022-08-15T16:06:19.000Z",
            updatedAt: "2022-08-15T18:03:13.000Z",
            Clients: [{
                id: 5,
                FirstName: "Nathan",
                LastName: "Admin",
                Email: "admin@nathan",
                Phone: "0000 000 000",
                role: 1,
                Password: "$2b$10$szwT6/oY.6Dh4tl7tUwvK.cCJ5xbten4r2m.09mr0VsDRHCQ4zJSa",
                createdAt: "2022-08-13T22:02:26.000Z",
                updatedAt: "2022-08-13T22:02:26.000Z",
                ClientsLessons: {
                    createdAt: "2022-08-15T18:03:01.000Z",
                    updatedAt: "2022-08-15T18:03:01.000Z",
                    ClientId: 5,
                    LessonId: 2
                }
            }]
        }]))
    }))

    beforeAll(() => server.listen())
    afterEach(() => server.resetHandlers())
    afterAll(() => server.close())

    it('Should render without crash', async () => {
        render(<Admin_cours/>)
    })

    it('should handel server error', async () => {
        server.use(rest.get('http://localhost:3001/lessons/admin', (req, res, ctx) => {
            return res(ctx.status(500))
        }))
        render(<Admin_cours/>)
    })
})