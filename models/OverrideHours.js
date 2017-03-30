const mongoose = require('mongoose')
const OverrideHours = new mongoose.Schema({
  dayOfWeek: String,
  start: String,
  end: String,
  office: Boolean,
  user: { type: mongoose.Schema.ObjectId },
  approved: Boolean
})

mongoose.model('OverrideHours', OverrideHours)
