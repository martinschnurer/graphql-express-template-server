const app = require('express')()
const { makeExecutableSchema, addMockFunctionsToSchema, MockList } = require('graphql-tools')
const graphqlHTTP = require('express-graphql')
const faker = require('faker')
const resolvers = require('./resolvers')
const { rootQuery, person, address, personInput } = require('./schema')
const mockSchema = require('./utils/mock')

const schema = makeExecutableSchema({
	typeDefs: [...rootQuery, person, address, personInput ], 
	resolvers
});

mockSchema(schema)

app.use('/graphql', graphqlHTTP({
	schema: schema,
	graphiql: true
}));
  
app.listen(3001, (err) => err ? console.log(err) : console.log('listening on port 3001'))