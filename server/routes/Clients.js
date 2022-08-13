const express = require('express')
const router = express.Router()
const { Clients } = require("../models")
const bcrypt = require("bcrypt")

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
    const {Email, Password} = req.body
    const client = await Clients.findOne({ where: {
            Email: Email
        }})
    if (!client) res.json({ error: "User doesn't exist!"})
    bcrypt.compare(Password, client.password).then((match) => {
        if(!match) res.json({error: "Wrong password"})


    })
})

module.exports = router