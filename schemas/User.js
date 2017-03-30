const typeDefinitions = `
  type User {
    firstName: String!
    lastName: String
    email: String
    admin: Boolean
    password: String
  }

  type RootQuery {
    user(firstName: String!): User
    allUsers: [User]
  }

  type RootMutation {
    createUser(
      firstName: String!
      lastName: String
      email: String
      admin: Boolean
      password: String
    ): User
  }

  schema {
    query: RootQuery
    mutation: RootMutation
  }
`

module.exports = [ typeDefinitions ]

