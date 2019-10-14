import { gql } from 'app/overmind-graphql';

import { Sandbox, SidebarCollection, Team } from './fragments';

export const createTeam = gql`
  mutation CreateTeam($name: String!) {
    createTeam(name: $name) {
      ...Team
    }
  }
  ${Team}
`;

export const createFolder = gql`
  mutation createCollection($path: String!, $teamId: ID) {
    createCollection(path: $path, teamId: $teamId) {
      ...SidebarCollection
    }
  }
  ${SidebarCollection}
`;

export const deleteFolder = gql`
  mutation deleteCollection($path: String!, $teamId: ID) {
    deleteCollection(path: $path, teamId: $teamId) {
      ...SidebarCollection
    }
  }
  ${SidebarCollection}
`;

export const renameFolder = gql`
  mutation renameCollection(
    $path: String!
    $newPath: String!
    $teamId: ID
    $newTeamId: ID
  ) {
    renameCollection(
      path: $path
      newPath: $newPath
      teamId: $teamId
      newTeamId: $newTeamId
    ) {
      ...SidebarCollection
    }
  }
  ${SidebarCollection}
`;

export const addSandboxToFolder = gql`
  mutation AddToCollection(
    $collectionPath: String!
    $sandboxIds: [ID]!
    $teamId: ID
  ) {
    addToCollection(
      collectionPath: $collectionPath
      sandboxIds: $sandboxIds
      teamId: $teamId
    ) {
      sandboxes {
        ...Sandbox
      }
    }
  }
  ${Sandbox}
`;

export const deleteSandbox = gql`
  mutation DeleteSandboxes($sandboxIds: [ID]!) {
    deleteSandboxes(sandboxIds: $sandboxIds) {
      ...Sandbox
    }
  }
  ${Sandbox}
`;

export const makeSandboxesTemplate = gql`
  mutation MakeSandboxesTemplate($sandboxIds: [ID]!) {
    makeSandboxesTemplates(sandboxIds: $sandboxIds) {
      id
    }
  }
`;

export const unmakeSandboxesTemplate = gql`
  mutation UnmakeSandboxesTemplate($sandboxIds: [ID]!) {
    unmakeSandboxesTemplates(sandboxIds: $sandboxIds) {
      id
    }
  }
  ${Sandbox}
`;

export const setSandboxesPrivacy = gql`
  mutation SetSandboxesPrivacy($sandboxIds: [ID]!, $privacy: Int!) {
    setSandboxesPrivacy(sandboxIds: $sandboxIds, privacy: $privacy) {
      ...Sandbox
    }
  }
  ${Sandbox}
`;

export const renameSandbox = gql`
  mutation RenameSandbox($id: [ID]!, $title: String!) {
    renameSandbox(id: $id, title: $title) {
      ...Sandbox
    }
  }
  ${Sandbox}
`;

export const permanentlyDeleteSandboxes = gql`
  mutation PermanentlyDeleteSandboxes($sandboxIds: [ID]!) {
    permanentlyDeleteSandboxes(sandboxIds: $sandboxIds) {
      ...Sandbox
    }
  }
  ${Sandbox}
`;

export const leaveTeam = gql`
  mutation LeaveTeam($teamId: ID!) {
    leaveTeam(teamId: $teamId)
  }
`;

export const removeFromTeam = gql`
  mutation RemoveFromTeam($teamId: ID!, $userId: ID!) {
    removeFromTeam(teamId: $teamId, userId: $userId) {
      ...Team
    }
  }
  ${Team}
`;

export const inviteToTeam = gql`
  mutation InviteToTeam($teamId: ID!, $username: String!) {
    inviteToTeam(teamId: $teamId, username: $username) {
      ...Team
    }
  }
  ${Team}
`;

export const revokeTeamInviation = gql`
  mutation RevokeTeamInvitation($teamId: ID!, $userId: ID!) {
    revokeTeamInvitation(teamId: $teamId, userId: $userId) {
      ...Team
    }
  }
  ${Team}
`;

export const acceptTeamInvitation = gql`
  mutation AcceptTeamInvitation($teamId: ID!) {
    acceptTeamInvitation(teamId: $teamId) {
      ...Team
    }
  }
  ${Team}
`;

export const rejectTeamInvitation = gql`
  mutation RejectTeamInvitation($teamId: ID!) {
    rejectTeamInvitation(teamId: $teamId)
  }
`;

export const setTeamDescription = gql`
  mutation SetTeamDescription($teamId: ID!, $description: String!) {
    SetTeamDescription(teamId: $teamId, description: $description) {
      ...Team
    }
  }
  ${Team}
`;
