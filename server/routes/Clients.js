const express = require('express')
const router = express.Router()
const {Clients} = require("../models")
const bcrypt = require("bcryptjs")
const {validateToken} = require("../middleware/ClientMiddleware")
const {verify} = require("jsonwebtoken")

const {sign} = require('jsonwebtoken')

router.get("/", async (req, res) => {
    /*Cette fonction envoie la liste des clients
        PRE : /
        POST : la liste des clients
        */
    const listOfClients = await Clients.findAll()
    res.json(listOfClients)
})

router.post("/", async (req, res) => {
    /*Cette fonction enregistre un nouveau client dans la DB en cryptant le mot de passe
        PRE : les données d'inscriptions
        POST : /
        */
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
    /*Cette fonction récupère les informations de connexion, vérifie que le mot de passe correspond et renvoie
    un token de connexion
        PRE : les informations de connexion
        POST : le token du client
        */
    const {FirstName, LastName, Email, Phone, Password} = req.body
    const client = await Clients.findOne({where: {Email: Email}})
    if (!client) res.json({error: "User doesn't exist!"})
    bcrypt.compare(Password, client.Password).then((match) => {
        if (!match) res.json({error: "Wrong password"})

        const accesToken = sign({username: client.username, id: client.id, role: client.role}, "Af8974sgqqszryhbh")
        res.json(accesToken)
    })
})

router.post('/verify', async (req, res) => {
    /*Cette fonction récupère un token et revoie le rôle stocké dedans
        PRE : un token
        POST : le role stocké dans le token
        */
    const token = req.body.accessToken
    const validToken = verify(token, "Af8974sgqqszryhbh")
    res.json(validToken.role)
})

module.exports = router