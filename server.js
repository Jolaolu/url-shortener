require('dotenv').config()

const express = require('express')

const app = express();

let PORT = process.env.PORT

const server = app.listen(PORT, ()=>{
    console.log(`Your app is now running on port ${PORT}`)
})

module.exports = app