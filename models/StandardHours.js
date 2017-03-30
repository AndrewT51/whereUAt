const mongoose = require('mongoose')
const StandardHours = new mongoose.Schema({
  dayOfWeek: String,
  start: String,
  end: String,
  office: Boolean,
  user: { type: mongoose.Schema.ObjectId }
})

mongoose.model('StandardHours', StandardHours)
