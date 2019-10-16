/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AcceptTeamInvitation
// ====================================================

export interface AcceptTeamInvitation_acceptTeamInvitation_users {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface AcceptTeamInvitation_acceptTeamInvitation_invitees {
  id: string | null;
  name: string | null;
  username: string | null;
  avatarUrl: string | null;
}

export interface AcceptTeamInvitation_acceptTeamInvitation {
  id: string | null;
  name: string | null;
  description: string | null;
  creatorId: string | null;
  users: (AcceptTeamInvitation_acceptTeamInvitation_users | null)[] | null;
  invitees:
    | (AcceptTeamInvitation_acceptTeamInvitation_invitees | null)[]
    | null;
}

export interface AcceptTeamInvitation {
  /**
   * Accept an invitation to a team
   */
  acceptTeamInvitation: AcceptTeamInvitation_acceptTeamInvitation | null;
}

export interface AcceptTeamInvitationVariables {
  teamId: string;
}
