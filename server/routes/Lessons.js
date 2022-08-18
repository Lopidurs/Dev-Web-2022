const express = require('express')
const router = express.Router()
const {Clients} = require("../models")
const {Lessons} = require("../models")
const {ClientsLessons} = require("../models")
const {validateToken} = require("../middleware/ClientMiddleware")

router.get("/", async (req, res) => {
    const listOfLessons = await Lessons.findAll()
    res.json(listOfLessons)
})

router.post("/", validateToken, async (req, res) => {
    if (req.user.role !== 1) return res.json({error: "User is not an admin"})
    const lesson = req.body
    await Lessons.create(lesson)
    res.json(lesson)
})

router.post("/ins/:id", validateToken, async (req, res) => {
    const id = req.params.id
    const lesson = await Lessons.findByPk(id)
    if (lesson.Places <= 0) return res.json({error: "Il n'y a plus de place disponible"})
    const client = await Clients.findOne({
        where: {id: req.user.id},
        include: Lessons
    })

    let match = 0
    client.Lessons.map((item) => {
        console.log(item.dataValues.id)
        console.log(id)
        if (item.dataValues.id == id) match = 1
    })

    if (match === 1) return res.json({error: "Vous êtes déjà inscrit au cour"})
    await lesson.addClients(client, {through: ClientsLessons})
    console.log('1')
    const newLesson = await Lessons.update(
        {
            Places: lesson.Places - 1
        },
        {
            where: {id: id}
        }
    )
    console.log('2')
    return res.json({succes: "Vous vous êtes bien inscrit!"})
})


router.get("/admin", async (req, res) => {
    const listOfLessons = await Lessons.findAll({include: Clients})
    res.json(listOfLessons)
})
module.exports = router