const User = require('mongoose').model('User')

const resolveFunctions = {
  RootQuery: {
    user: (_, { firstName }) => User.findOne({ firstName: firstName }),
    allUsers: () => User.find({})
  },
  RootMutation: {
    createUser: (_, body) => User.create(body)
  }
}

module.exports = resolveFunctions

