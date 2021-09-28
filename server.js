const express = require('express')
const app = express()

const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
})

const port = process.env.PORT || 5656

app.listen(port, () => console.log(`Hippity Hoppity your server is poppening on: ${port}`))