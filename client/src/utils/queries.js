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
        authors
        title
        description
        image
        link
      }
    }
  }
`;

export const GET_ME_BOOKS = gql`
  {
    me {
      _id
      savedBooks {
        bookId
      }
    }
  }
`;
