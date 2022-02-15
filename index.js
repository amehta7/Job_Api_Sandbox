const express = require('express')
const app = express()
const connectDB = require('./db/connect')

require('dotenv').config()

app.listen(3000, (req, res) => console.log(`THE SERVER IS RUNNING ON :3000`))
