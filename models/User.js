const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const User = new mongoose.Schema({
  firstName: {type: String, required: true},
  lastName: String,
  password: String,
  email: String,
  admin: Boolean

})

User.pre('save', function (done) {
  const plaintext = this.password
  return bcrypt.hash(plaintext, 10)
  .then(hash => {
    this.password = hash
    done()
  })
})

User.methods.checkPassword = function (plaintext) {
  return bcrypt.compare(plaintext, this.password)
}

mongoose.model('User', User)
