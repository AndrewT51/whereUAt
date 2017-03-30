require('./db-setup')
const User = require('mongoose').model('User')
const fs = require('fs')
const path = require('path')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { graphqlExpress, graphiqlExpress } = require('graphql-server-express')
const { makeExecutableSchema } = require('graphql-tools')
const logger = require('morgan')
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'})

app.use(logger('combined', {stream: accessLogStream}))
app.use(bodyParser.json())

app.post('/adduser', ({ body }, res, next) => {
  console.log(body)
  return User.create(body)
  .then(data => res.send(data))
})

const Schema = require('./schemas/User')
const Resolvers = require('./resolvers')
// const Connectors = require('./connectors')

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
})

app.use('/graphql', graphqlExpress({
  debug: true,
  schema: executableSchema
}))

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql'
}))

app.listen(3000, () => console.log(`Listening on port 3000`))

