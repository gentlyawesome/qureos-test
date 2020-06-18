const express = require('express')
const app = express();

require('dotenv').config();

app.use('/', (req, res) => {
    res.json({ message : 'Ahoy!'})
})

app.use('/ping', (req, res) => {
    res.json({ message : 'pong'})
})

app.listen(process.env.PORT, () => {
    console.log("API is on port:" + process.env.PORT)
})