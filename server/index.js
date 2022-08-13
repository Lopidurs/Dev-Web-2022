const express = require("express")
const PORT = process.env.PORT || 3001
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())

const db = require('./models')

// Routers
const clientRouter = require('./routes/Clients')
app.use("/clients", clientRouter)
const commandRouter = require('./routes/Commands')
app.use("/commands", commandRouter)

db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
})
