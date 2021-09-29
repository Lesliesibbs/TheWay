import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
	uri: "http://192.168.1.193:1337/graphql",
	cache: new InMemoryCache(),
	name: "TheWay",
	version: "1.0",
});

export default client;
