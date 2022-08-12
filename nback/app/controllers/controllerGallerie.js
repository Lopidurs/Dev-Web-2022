const Gallerie = require("../models/modelGallerie.js");

// Create and Save a new Gallerie
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
    // Create a Gallerie
    const gallerie = new Gallerie({
        galerie_id: req.body.galerie_id,
        img_id: req.body.img_id,
        galerie_nom: req.body.galerie_nom,
        date_upload: req.body.date_upload
    });
    // Save Gallerie in the database
    Gallerie.create(gallerie, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Gallerie."
        });
      else res.send(data);
    });
  };
// Retrieve all Gallerie from the database (with condition).
exports.findAll = (req, res) => {
    const galerie_nom = req.query.galerie_nom;
    Gallerie.getAll(galerie_nom, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving galleries."
        });
      else res.send(data);
    });
  };
  exports.findAllPublished = (req, res) => {
    Gallerie.getAllPublished((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving galleries."
        });
      else res.send(data);
    });
  };
// Find a single Gallerie with a galerie_id
exports.findOne = (req, res) => {
    Gallerie.findById(req.params.galerie_id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Gallerie with id ${req.params.galerie_id}.`
          });
        } else {
          res.status(500).send({
            message: "Error retrieving Gallerie with id " + req.params.galerie_id
          });
        }
      } else res.send(data);
    });
  };