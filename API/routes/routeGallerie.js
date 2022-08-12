const express = require('express');
const router = express.Router();
const ctrData = require("../controllers/controllerGallerie");

// Get last route
router.get("/all", (req, res)  => ctrData.getAll(req, res));
// Post data
router.post("/upload", (req, res)  => ctrData.postUpload(req, res));

module.exports = router;
