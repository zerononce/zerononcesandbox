/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: TeamsSidebar
// ====================================================

export interface TeamsSidebar_me_teams {
  id: string | null;
  name: string | null;
}

export interface TeamsSidebar_me {
  teams: (TeamsSidebar_me_teams | null)[] | null;
}

export interface TeamsSidebar {
  /**
   * Get current user
   */
  me: TeamsSidebar_me | null;
}
