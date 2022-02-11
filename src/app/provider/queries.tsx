import { gql } from '@apollo/client';

export const REPO_QUERY = gql`
  query RepoQuery($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      nodes {
        ... on Repository {
          id
          nameWithOwner
          description
          languages(first: 1) {
            nodes {
              name
            }
          }
          licenseInfo {
            name
          }
          owner {
            ... on User {
              id
              email
              login
              bio
            }
            id
          }
          updatedAt
          stargazerCount
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      repositoryCount
    }
  }
`;

export const USER_QUERY = gql`
  query UserQuery($query: String!, $type: SearchType!, $first: Int) {
    search(query: $query, type: $type, first: $first) {
      nodes {
        ... on User {
          id
          email
          bio
          login
          name
          location
        }
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      userCount
    }
  }
`;

export const VIEWER_QUERY = gql`
  query ViewerQuery {
    viewer {
      login
      name
      avatarUrl
    }
  }
`;
