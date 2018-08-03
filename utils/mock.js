const faker = require('faker')
const { MockList, addMockFunctionsToSchema } = require('graphql-tools')

module.exports = (schema) => addMockFunctionsToSchema({
	schema,
	mocks: {
		Query: () => ({
			persons: () => new MockList([0,10])
		}), 
		Person: () => ({
			firstName: () => faker.name.firstName(0),
			lastName: () => faker.name.lastName(0),
			birthday: () => new Date(faker.date.past(50, '2000-01-01')).toISOString().split('T')[0]
		}),
		Address: () => ({
			street: () => faker.address.streetName(),
			state: () => faker.address.state(),
			postCode: () => faker.address.countryCode(),
			streetNumber: () => faker.random.number() + "",
			city: () => faker.address.city()
		})
	}
})