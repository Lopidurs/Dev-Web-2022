const express = require('express')
const router = express.Router()
const { Commands } = require("../models")
const { Clients } = require("../models")
const { validateToken } = require("../middleware/ClientMiddleware")
const { upload } = require("../middleware/ImagesMiddleware")


router.get("/",async (req, res) => {
    const listOfCommands = await Commands.findAll({ include: Clients})
    res.json(listOfCommands)
})

router.post("/", validateToken, upload.single('Image'), async (req, res) => {
    const command = req.body
    command.ClientId = req.user.id
    await Commands.create(command)
    res.json(command)
})

module.exports = router