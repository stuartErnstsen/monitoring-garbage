const express = require('express')
const app = express()

const path = require('path')

const Rollbar = require('rollbar')

const rollbar = new Rollbar({
    accessToken: '70ccc12fbb074c04aed96992bc2c69ba',
    captureUncaught: true,
    captureUnhandledRejections: true
})

app.use(rollbar.errorHandler())

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/index.html'))
    rollbar.info('You have monitored serving your html successfully!')
})

//STUDENT STUFF!! --------------------------------------------------------------------------

const students = []

app.post('/api/students', (req, res) => {
    const { name } = req.body
    name = name.trim()

    students.push(name)


    rollbar.log('Student added successfully', { author: 'Stuart' })
    res.status(200).send(students)
})

const port = process.env.PORT || 5656

app.listen(port, () => console.log(`Hippity Hoppity your server is poppening on: ${port}`))