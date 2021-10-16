import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";
const client = new ApolloClient({
  uri: "https://graphql-weather-api.herokuapp.com/", //backend endpoint
  cache: new InMemoryCache(), //cache yazılması için.
});
export default client;
//backende bağalancak olan client burada olacak
