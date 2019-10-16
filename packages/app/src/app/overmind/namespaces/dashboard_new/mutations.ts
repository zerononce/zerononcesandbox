import { Query, gql } from 'app/overmind-graphql';

import { Sandbox, SidebarCollection, Team } from './fragments';
import {
  AcceptTeamInvitation,
  AcceptTeamInvitationVariables,
} from './graphql-types/AcceptTeamInvitation';
import {
  AddToCollection,
  AddToCollectionVariables,
} from './graphql-types/AddToCollection';
import {
  CreateCollection,
  CreateCollectionVariables,
} from './graphql-types/createCollection';
import { CreateTeam, CreateTeamVariables } from './graphql-types/CreateTeam';
import {
  DeleteCollection,
  DeleteCollectionVariables,
} from './graphql-types/deleteCollection';
import {
  DeleteSandboxes,
  DeleteSandboxesVariables,
} from './graphql-types/DeleteSandboxes';
import {
  InviteToTeam,
  InviteToTeamVariables,
} from './graphql-types/InviteToTeam';
import { LeaveTeam, LeaveTeamVariables } from './graphql-types/LeaveTeam';
import {
  MakeSandboxesTemplate,
  MakeSandboxesTemplateVariables,
} from './graphql-types/MakeSandboxesTemplate';
import {
  PermanentlyDeleteSandboxes,
  PermanentlyDeleteSandboxesVariables,
} from './graphql-types/PermanentlyDeleteSandboxes';
import {
  RejectTeamInvitation,
  RejectTeamInvitationVariables,
} from './graphql-types/RejectTeamInvitation';
import {
  RemoveFromTeam,
  RemoveFromTeamVariables,
} from './graphql-types/RemoveFromTeam';
import {
  RenameCollection,
  RenameCollectionVariables,
} from './graphql-types/renameCollection';
import {
  RenameSandbox,
  RenameSandboxVariables,
} from './graphql-types/RenameSandbox';
import {
  RevokeTeamInvitation,
  RevokeTeamInvitationVariables,
} from './graphql-types/RevokeTeamInvitation';
import {
  SetSandboxesPrivacy,
  SetSandboxesPrivacyVariables,
} from './graphql-types/SetSandboxesPrivacy';
import {
  SetTeamDescription,
  SetTeamDescriptionVariables,
} from './graphql-types/SetTeamDescription';
import {
  UnmakeSandboxesTemplate,
  UnmakeSandboxesTemplateVariables,
} from './graphql-types/UnmakeSandboxesTemplate';

export const createTeam: Query<CreateTeam, CreateTeamVariables> = gql`
  mutation CreateTeam($name: String!) {
    createTeam(name: $name) {
      ...Team
    }
  }
  ${Team}
`;

export const createFolder: Query<
  CreateCollection,
  CreateCollectionVariables
> = gql`
  mutation CreateCollection($path: String!, $teamId: ID) {
    createCollection(path: $path, teamId: $teamId) {
      ...SidebarCollection
    }
  }
  ${SidebarCollection}
`;

export const deleteFolder: Query<
  DeleteCollection,
  DeleteCollectionVariables
> = gql`
  mutation DeleteCollection($path: String!, $teamId: ID) {
    deleteCollection(path: $path, teamId: $teamId) {
      ...SidebarCollection
    }
  }
  ${SidebarCollection}
`;

export const renameFolder: Query<
  RenameCollection,
  RenameCollectionVariables
> = gql`
  mutation RenameCollection(
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

export const addSandboxToFolder: Query<
  AddToCollection,
  AddToCollectionVariables
> = gql`
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

export const deleteSandboxes: Query<
  DeleteSandboxes,
  DeleteSandboxesVariables
> = gql`
  mutation DeleteSandboxes($sandboxIds: [ID]!) {
    deleteSandboxes(sandboxIds: $sandboxIds) {
      ...Sandbox
    }
  }
  ${Sandbox}
`;

export const makeSandboxesTemplate: Query<
  MakeSandboxesTemplate,
  MakeSandboxesTemplateVariables
> = gql`
  mutation MakeSandboxesTemplate($sandboxIds: [ID]!) {
    makeSandboxesTemplates(sandboxIds: $sandboxIds) {
      id
    }
  }
`;

export const unmakeSandboxesTemplate: Query<
  UnmakeSandboxesTemplate,
  UnmakeSandboxesTemplateVariables
> = gql`
  mutation UnmakeSandboxesTemplate($sandboxIds: [ID]!) {
    unmakeSandboxesTemplates(sandboxIds: $sandboxIds) {
      id
    }
  }
  ${Sandbox}
`;

export const setSandboxesPrivacy: Query<
  SetSandboxesPrivacy,
  SetSandboxesPrivacyVariables
> = gql`
  mutation SetSandboxesPrivacy($sandboxIds: [ID]!, $privacy: Int!) {
    setSandboxesPrivacy(sandboxIds: $sandboxIds, privacy: $privacy) {
      ...Sandbox
    }
  }
  ${Sandbox}
`;

export const renameSandbox: Query<RenameSandbox, RenameSandboxVariables> = gql`
  mutation RenameSandbox($id: ID!, $title: String!) {
    renameSandbox(id: $id, title: $title) {
      ...Sandbox
    }
  }
  ${Sandbox}
`;

export const permanentlyDeleteSandboxes: Query<
  PermanentlyDeleteSandboxes,
  PermanentlyDeleteSandboxesVariables
> = gql`
  mutation PermanentlyDeleteSandboxes($sandboxIds: [ID]!) {
    permanentlyDeleteSandboxes(sandboxIds: $sandboxIds) {
      ...Sandbox
    }
  }
  ${Sandbox}
`;

export const leaveTeam: Query<LeaveTeam, LeaveTeamVariables> = gql`
  mutation LeaveTeam($teamId: ID!) {
    leaveTeam(teamId: $teamId)
  }
`;

export const removeFromTeam: Query<
  RemoveFromTeam,
  RemoveFromTeamVariables
> = gql`
  mutation RemoveFromTeam($teamId: ID!, $userId: ID!) {
    removeFromTeam(teamId: $teamId, userId: $userId) {
      ...Team
    }
  }
  ${Team}
`;

export const inviteToTeam: Query<InviteToTeam, InviteToTeamVariables> = gql`
  mutation InviteToTeam($teamId: ID!, $username: String!) {
    inviteToTeam(teamId: $teamId, username: $username) {
      ...Team
    }
  }
  ${Team}
`;

export const revokeTeamInviation: Query<
  RevokeTeamInvitation,
  RevokeTeamInvitationVariables
> = gql`
  mutation RevokeTeamInvitation($teamId: ID!, $userId: ID!) {
    revokeTeamInvitation(teamId: $teamId, userId: $userId) {
      ...Team
    }
  }
  ${Team}
`;

export const acceptTeamInvitation: Query<
  AcceptTeamInvitation,
  AcceptTeamInvitationVariables
> = gql`
  mutation AcceptTeamInvitation($teamId: ID!) {
    acceptTeamInvitation(teamId: $teamId) {
      ...Team
    }
  }
  ${Team}
`;

export const rejectTeamInvitation: Query<
  RejectTeamInvitation,
  RejectTeamInvitationVariables
> = gql`
  mutation RejectTeamInvitation($teamId: ID!) {
    rejectTeamInvitation(teamId: $teamId)
  }
`;

export const setTeamDescription: Query<
  SetTeamDescription,
  SetTeamDescriptionVariables
> = gql`
  mutation SetTeamDescription($teamId: ID!, $description: String!) {
    setTeamDescription(teamId: $teamId, description: $description) {
      ...Team
    }
  }
  ${Team}
`;
