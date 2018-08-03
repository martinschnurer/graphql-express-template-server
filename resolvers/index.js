const resolvers = {
	Mutation: {
		createPerson: (root, args) => {
			console.log(root, args)
			return {}
		}
	},
	Person: () => ({
		firstName: "martin schnurer"
	})
}

exports = resolvers