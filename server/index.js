const express = require("express")
const app = express()
const cors = require('cors')
require("dotenv").config();
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(cors())

const db = require('./models')

// Routers
const clientRouter = require('./routes/Clients')
app.use("/clients", clientRouter)
const commandRouter = require('./routes/Commands')
app.use("/commands", commandRouter)
const lessonRouter = require('./routes/Lessons')
app.use("/lessons", lessonRouter)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
}).catch((err) => {
    console.log(err)
})
