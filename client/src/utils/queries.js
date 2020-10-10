// this file stores all of the GraphQL query requests
import gql from 'graphql-tag';

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        bookId
        title
      }
    }
  }
`;
