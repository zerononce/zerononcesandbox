/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RevokeTeamInvitation
// ====================================================

export interface RevokeTeamInvitation_revokeTeamInvitation_users {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface RevokeTeamInvitation_revokeTeamInvitation_invitees {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface RevokeTeamInvitation_revokeTeamInvitation {
  id: string | null;
  name: string | null;
  description: string | null;
  creatorId: string | null;
  users: (RevokeTeamInvitation_revokeTeamInvitation_users | null)[] | null;
  invitees:
    | (RevokeTeamInvitation_revokeTeamInvitation_invitees | null)[]
    | null;
}

export interface RevokeTeamInvitation {
  /**
   * Revoke an invitation to a team
   */
  revokeTeamInvitation: RevokeTeamInvitation_revokeTeamInvitation | null;
}

export interface RevokeTeamInvitationVariables {
  teamId: string;
  userId: string;
}
