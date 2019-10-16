/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetTeamDescription
// ====================================================

export interface SetTeamDescription_setTeamDescription_users {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface SetTeamDescription_setTeamDescription_invitees {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface SetTeamDescription_setTeamDescription {
  id: string | null;
  name: string | null;
  description: string | null;
  creatorId: string | null;
  users: (SetTeamDescription_setTeamDescription_users | null)[] | null;
  invitees: (SetTeamDescription_setTeamDescription_invitees | null)[] | null;
}

export interface SetTeamDescription {
  /**
   * Set the description of the team
   */
  setTeamDescription: SetTeamDescription_setTeamDescription | null;
}

export interface SetTeamDescriptionVariables {
  teamId: string;
  description: string;
}
