import { Query, gql } from 'app/overmind-graphql';

import { Sandbox, SidebarCollection, Team as TeamFragment } from './fragments';
import { DeletedSandboxes } from './graphql-types/DeletedSandboxes';
import {
  ListTemplates,
  ListTemplatesVariables,
} from './graphql-types/ListTemplates';
import {
  PathedSandboxes,
  PathedSandboxesVariables,
} from './graphql-types/PathedSandboxes';
import {
  PathedSandboxesFolders,
  PathedSandboxesFoldersVariables,
} from './graphql-types/PathedSandboxesFolders';
import {
  RecentSandboxes,
  RecentSandboxesVariables,
} from './graphql-types/RecentSandboxes';
import { SearchSandboxes } from './graphql-types/SearchSandboxes';
import { Team } from './graphql-types/Team';
import { TeamsSidebar } from './graphql-types/TeamsSidebar';

export const teams: Query<TeamsSidebar> = gql`
  query TeamsSidebar {
    me {
      teams {
        id
        name
      }
    }
  }
`;

export const pathedSandboxesFolders: Query<
  PathedSandboxesFolders,
  PathedSandboxesFoldersVariables
> = gql`
  query PathedSandboxesFolders($teamId: ID) {
    me {
      collections(teamId: $teamId) {
        ...SidebarCollection
      }
    }
  }
  ${SidebarCollection}
`;

export const list: Query<ListTemplates, ListTemplatesVariables> = gql`
  query ListTemplates($teamId: ID, $showAll: Boolean) {
    me {
      templates(teamId: $teamId, showAll: $showAll) {
        color
        iconUrl
        id
        published
        sandbox {
          ...Sandbox
        }
      }
    }
  }

  ${Sandbox}
`;

export const pathedSandboxes: Query<
  PathedSandboxes,
  PathedSandboxesVariables
> = gql`
  query PathedSandboxes($path: String!, $teamId: ID) {
    me {
      collections(teamId: $teamId) {
        ...SidebarCollection
      }
      collection(path: $path, teamId: $teamId) {
        id
        path
        sandboxes {
          ...Sandbox
        }
      }
    }
  }
  ${Sandbox}
  ${SidebarCollection}
`;

export const recentSandboxes: Query<
  RecentSandboxes,
  RecentSandboxesVariables
> = gql`
  query RecentSandboxes($orderField: String!, $orderDirection: Direction!) {
    me {
      sandboxes(
        limit: 20
        orderBy: { field: $orderField, direction: $orderDirection }
      ) {
        ...Sandbox
      }
    }
  }
  ${Sandbox}
`;

export const searchSandboxes: Query<SearchSandboxes> = gql`
  query SearchSandboxes {
    me {
      sandboxes(orderBy: { field: "updated_at", direction: DESC }) {
        ...Sandbox
      }
    }
  }
  ${Sandbox}
`;

export const deletedSandboxes: Query<DeletedSandboxes> = gql`
  query DeletedSandboxes {
    me {
      sandboxes(
        showDeleted: true
        orderBy: { field: "updated_at", direction: DESC }
      ) {
        ...Sandbox
        removedAt
      }
    }
  }
  ${Sandbox}
`;

export const team: Query<Team> = gql`
  query Team($id: ID!) {
    me {
      team(id: $id) {
        ...Team
      }
    }
  }
  ${TeamFragment}
`;
