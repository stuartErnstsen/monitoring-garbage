const express = require('express')
const app = express()

const path = require('path')

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
    accessToken: '70ccc12fbb074c04aed96992bc2c69ba',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('You have monitored serving your html successfully!')
})

const port = process.env.PORT || 5656

app.listen(port, () => console.log(`Hippity Hoppity your server is poppening on: ${port}`))