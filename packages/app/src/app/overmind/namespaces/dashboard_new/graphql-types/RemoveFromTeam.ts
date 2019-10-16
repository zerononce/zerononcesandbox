/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RemoveFromTeam
// ====================================================

export interface RemoveFromTeam_removeFromTeam_users {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface RemoveFromTeam_removeFromTeam_invitees {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface RemoveFromTeam_removeFromTeam {
  id: string | null;
  name: string | null;
  description: string | null;
  creatorId: string | null;
  users: (RemoveFromTeam_removeFromTeam_users | null)[] | null;
  invitees: (RemoveFromTeam_removeFromTeam_invitees | null)[] | null;
}

export interface RemoveFromTeam {
  /**
   * Remove someone from a team
   */
  removeFromTeam: RemoveFromTeam_removeFromTeam | null;
}

export interface RemoveFromTeamVariables {
  teamId: string;
  userId: string;
}
