import {ApolloClient, InMemoryCache} from '@apollo/client';
import query from '../schema/schema';

const client = new ApolloClient({
    uri: 'https://appolo-server-adil.herokuapp.com/',
    cache: new InMemoryCache(),
  });

client.query(query);
export default client;