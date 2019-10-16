/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: InviteToTeam
// ====================================================

export interface InviteToTeam_inviteToTeam_users {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface InviteToTeam_inviteToTeam_invitees {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface InviteToTeam_inviteToTeam {
  id: string | null;
  name: string | null;
  description: string | null;
  creatorId: string | null;
  users: (InviteToTeam_inviteToTeam_users | null)[] | null;
  invitees: (InviteToTeam_inviteToTeam_invitees | null)[] | null;
}

export interface InviteToTeam {
  /**
   * Invite someone to a team
   */
  inviteToTeam: InviteToTeam_inviteToTeam | null;
}

export interface InviteToTeamVariables {
  teamId: string;
  username: string;
}
