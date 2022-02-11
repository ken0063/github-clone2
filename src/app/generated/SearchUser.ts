/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchType } from './globalTypes';

// ====================================================
// GraphQL query operation: SearchUser
// ====================================================

export interface SearchUser_search_nodes_App {
  __typename:
    | 'App'
    | 'Discussion'
    | 'Issue'
    | 'MarketplaceListing'
    | 'Organization'
    | 'PullRequest'
    | 'Repository';
}

export interface SearchUser_search_nodes_User {
  __typename: 'User';
  id: string;
  /**
   * The user's publicly visible profile email.
   */
  email: string;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * The user's public profile location.
   */
  location: string | null;
}

export type SearchUser_search_nodes =
  | SearchUser_search_nodes_App
  | SearchUser_search_nodes_User;

export interface SearchUser_search_pageInfo {
  __typename: 'PageInfo';
  /**
   * When paginating forwards, the cursor to continue.
   */
  endCursor: string | null;
  /**
   * When paginating forwards, are there more items?
   */
  hasNextPage: boolean;
  /**
   * When paginating backwards, are there more items?
   */
  hasPreviousPage: boolean;
  /**
   * When paginating backwards, the cursor to continue.
   */
  startCursor: string | null;
}

export interface SearchUser_search {
  __typename: 'SearchResultItemConnection';
  /**
   * A list of nodes.
   */
  nodes: (SearchUser_search_nodes | null)[] | null;
  /**
   * Information to aid in pagination.
   */
  pageInfo: SearchUser_search_pageInfo;
  /**
   * The number of users that matched the search query.
   */
  userCount: number;
}

export interface SearchUser {
  /**
   * Perform a search across resources.
   */
  search?: SearchUser_search;
}

export interface SearchUserVariables {
  query: string;
  type: SearchType;
  first?: number | null;
}
