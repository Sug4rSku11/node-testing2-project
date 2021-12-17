const express = require('express')

const avengersRouter = require('./avengers/avengers-router')

const server = express()

server.use('/api/avengers', avengersRouter)

// server.use('*', (req,res) => {
//     res.json({ api: 'up' })
// })

// server.use((err, req, res, next) => {//eslint-disable-line
//     res.status(err.status || 500).json({
//         message: err.message,
//         stack: err.stack,
//     })
// })

module.exports = server