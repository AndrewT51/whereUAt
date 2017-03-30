require('./models')

const MONGO_URL = 'mongodb://localhost/whereUAt'
const mongoose = require('mongoose')
const Promise = require('bluebird')

mongoose.set('debug', true)
mongoose.Promise = Promise

mongoose.connect(MONGO_URL)
.then(() => console.log('MongoDB connection established'))
.catch(err => console.log(`Error ${err}`))

