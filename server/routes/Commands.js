const express = require('express')
const router = express.Router()
const { Commands } = require("../models")

router.get("/",async (req, res) => {
    const listOfCommands = await Commands.findAll()
    res.json(listOfCommands)
})

router.post("/", async (req, res) => {
    const command = req.body
    await Commands.create(command)
    res.json(command)
})

module.exports = router