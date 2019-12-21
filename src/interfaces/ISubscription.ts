// {
// 	name: 'IdentifierCreation',
// 	model: 'identifiers',
// 	// define set of operations that can be used
// 	operation: 'change',
// 	handler: identifierCreation,
// 	filters: [
// 		// todo: add support for more filter types
// 		// supports pipeline out of the box
// 		// need basic mongo query syntax filtering
// 	],
// 	options: {
// 		// defines options to be passed to the resulting
// 		// change stream. mongodb documentation provides
// 		// details: http://mongodb.github.io/node-mongodb-native/3.3/api/Collection.html#watch
// 		// fullDocument: 'default',
// }

export interface Subscription {
	name: string,
	model: string,
	// define set of operations that can be used
	operation: string,
	handler: () => void,
	filters: Array<SubscriptionFilter>,
	options: Object
}

export interface SubscriptionFilter {
	// todo: define subscription filter interface
}