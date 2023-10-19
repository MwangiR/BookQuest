import { gql } from '@apollo/client';

export const GET_ME = gql`
  query ME {
    me {
      _id
      username
      bookCount
      email
      savedBooks {
        authors
        bookId
        description
        image
        link
        title
      }
    }
  }
`;
