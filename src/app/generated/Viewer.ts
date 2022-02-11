/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: Viewer
// ====================================================

export interface Viewer_viewer {
  __typename: "User";
  /**
   * The username used to login.
   */
  login: string;
  /**
   * The user's public profile name.
   */
  name: string | null;
  /**
   * A URL pointing to the user's public avatar.
   */
  avatarUrl: any;
}

export interface Viewer {
  /**
   * The currently authenticated user.
   */
  viewer: Viewer_viewer;
}
