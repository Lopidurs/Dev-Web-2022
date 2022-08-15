const express = require('express')
const router = express.Router()
const { Clients } = require("../models")
const bcrypt = require("bcrypt")
const { validateToken } = require("../middleware/ClientMiddleware")
const {verify} = require("jsonwebtoken")

const {sign} = require('jsonwebtoken')

router.get("/",async (req, res) => {
    const listOfClients = await Clients.findAll()
    res.json(listOfClients)
})

router.post("/", async (req, res) => {
    const {FirstName, LastName, Email, Phone, Password} = req.body
    bcrypt.hash(Password, 10).then((hash) => {
        Clients.create({
            FirstName: FirstName,
            LastName: LastName,
            Email: Email,
            Phone: Phone,
            Password: hash
        })
        res.json("Success!")
    })
})

router.post('/login', async (req, res) => {
    const {FirstName, LastName, Email, Phone, Password} = req.body
    const client = await Clients.findOne({ where: {Email: Email}})
    if (!client) res.json({ error: "User doesn't exist!"})
    bcrypt.compare(Password, client.Password).then((match) => {
        if(!match) res.json({error: "Wrong password"})

        const accesToken = sign({username: client.username, id: client.id, role: client.role}, "Af8974sgqqszryhbh")
        res.json(accesToken)
    })
})

router.post('/verify', async (req, res) => {
    const token = req.body.accessToken
    const validToken = verify(token, "Af8974sgqqszryhbh")
    res.json(validToken.role)
})

module.exports = router