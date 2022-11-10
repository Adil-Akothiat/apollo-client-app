import {gql} from '@apollo/client';
const query = {
    query: gql `
    query GetUsers {
      users {
        id
        login
        avatar_url
        url
        repos_url
      }
    }
  `
};
export default query;