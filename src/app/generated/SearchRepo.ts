/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SearchType } from './globalTypes';

// ====================================================
// GraphQL query operation: SearchRepo
// ====================================================

export interface SearchRepo_search_nodes_App {
  __typename:
    | 'App'
    | 'Discussion'
    | 'Issue'
    | 'MarketplaceListing'
    | 'Organization'
    | 'PullRequest'
    | 'User';
}

export interface SearchRepo_search_nodes_Repository_languages_nodes {
  __typename: 'Language';
  /**
   * The name of the current language.
   */
  name: string;
}

export interface SearchRepo_search_nodes_Repository_languages {
  __typename: 'LanguageConnection';
  /**
   * A list of nodes.
   */
  nodes: (SearchRepo_search_nodes_Repository_languages_nodes | null)[] | null;
}

export interface SearchRepo_search_nodes_Repository_licenseInfo {
  __typename: 'License';
  /**
   * The license full name specified by <https: // spdx.org/licenses>
   */
  name: string;
}

export interface SearchRepo_search_nodes_Repository_owner_Organization {
  __typename: 'Organization';
  id: string;
}

export interface SearchRepo_search_nodes_Repository_owner_User {
  __typename: 'User';
  id: string;
  /**
   * The user's publicly visible profile email.
   */
  email: string;
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile bio.
   */
  bio: string | null;
}

export type SearchRepo_search_nodes_Repository_owner =
  | SearchRepo_search_nodes_Repository_owner_Organization
  | SearchRepo_search_nodes_Repository_owner_User;

export interface SearchRepo_search_nodes_Repository {
  __typename?: 'Repository';
  id?: string;
  /**
   * The repository's name with owner.
   */
  nameWithOwner?: string;
  /**
   * The description of the repository.
   */
  description?: string | null;
  /**
   * A list containing a breakdown of the language composition of the repository.
   */
  languages?: SearchRepo_search_nodes_Repository_languages | null;
  /**
   * The license associated with the repository
   */
  licenseInfo?: SearchRepo_search_nodes_Repository_licenseInfo | null;
  /**
   * The User owner of the repository.
   */
  owner?: SearchRepo_search_nodes_Repository_owner;
  /**
   * Identifies the date and time when the object was last updated.
   */
  updatedAt?: any;
  /**
   * Returns a count of how many stargazers there are on this object
   */
  stargazerCount?: number;
}

export type SearchRepo_search_nodes =
  | SearchRepo_search_nodes_App
  | SearchRepo_search_nodes_Repository;

export interface SearchRepo_search_pageInfo {
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

export interface SearchRepo_search {
  __typename: 'SearchResultItemConnection';
  /**
   * A list of nodes.
   */
  nodes: SearchRepo_search_nodes[];
  /**
   * Information to aid in pagination.
   */
  pageInfo: SearchRepo_search_pageInfo;
  /**
   * The number of repositories that matched the search query.
   */
  repositoryCount: number;
}

export interface SearchRepo {
  /**
   * Perform a search across resources.
   */
  search?: SearchRepo_search;
}

export interface SearchRepoVariables {
  query: string;
  type: SearchType;
  first?: number | null;
}
