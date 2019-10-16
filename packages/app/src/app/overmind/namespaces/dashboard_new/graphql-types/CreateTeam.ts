/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateTeam
// ====================================================

export interface CreateTeam_createTeam_users {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface CreateTeam_createTeam_invitees {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface CreateTeam_createTeam {
  id: string | null;
  name: string | null;
  description: string | null;
  creatorId: string | null;
  users: (CreateTeam_createTeam_users | null)[] | null;
  invitees: (CreateTeam_createTeam_invitees | null)[] | null;
}

export interface CreateTeam {
  /**
   * Create a team
   */
  createTeam: CreateTeam_createTeam | null;
}

export interface CreateTeamVariables {
  name: string;
}
