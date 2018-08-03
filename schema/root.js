module.exports = [`
	# A root query
	type Query {
		persons: [Person]
	}

	# A root Mutation
	type Mutation {
		createPerson(p: PersonInput!): Person!
	}
`]