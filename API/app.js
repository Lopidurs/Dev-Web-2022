const express = require('express');
const app = express();

require('dotenv').config();
const path = require('path');
const session = require('express-session');


///////////////// Body-parser ////////////////////////
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

///////////////// SYNC DB ////////////////////////////
const seq = require("./config/config");
seq.sequelize.sync()
    .then(() => console.log("--\nDatabase synchronized\n--"))
    .catch((error) => console.log("An error occurred while Synchronization.\n", error));

///////////////// Routes /////////////////////////////
const routeProducts = require("./routes/routeProducts");
const routeUsers = require("./routes/routeUsers");

app.use("/users", routeUsers);
app.use("/gallerie", routeGallerie);

app.listen('3000');

//module.exports = app;
