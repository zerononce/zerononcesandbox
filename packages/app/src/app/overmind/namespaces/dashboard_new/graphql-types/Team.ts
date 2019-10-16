/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Team
// ====================================================

export interface Team_users {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface Team_invitees {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface Team {
  id: string | null;
  name: string | null;
  description: string | null;
  creatorId: string | null;
  users: (Team_users | null)[] | null;
  invitees: (Team_invitees | null)[] | null;
}
