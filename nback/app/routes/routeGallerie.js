module.exports = app => {
    const galerie = require("../controllers/controllerGallerie.js");
    var router = require("express").Router();
    // Create a new Gallerie
    router.post("/", galerie.create);
    // Retrieve all Gallerie
    router.get("/", galerie.findAll);
    // Retrieve all published Gallerie
    router.get("/:id", galerie.findOne);
    // Update a Gallerie with id
};