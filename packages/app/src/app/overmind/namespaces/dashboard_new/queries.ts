import { Query, gql } from 'app/overmind-graphql';

import { Sandbox, SidebarCollection, Team } from './fragments';

export const teams: Query<{
  me: { teams: Array<{ id: string; name: string }> };
}> = gql`
  query TeamsSidebar {
    me {
      teams {
        id
        name
      }
    }
  }
`;

export const pathedSandboxesFolders = gql`
  query PathedSandboxesFolders($teamId: ID) {
    me {
      collections(teamId: $teamId) {
        ...SidebarCollection
      }
    }
  }
  ${SidebarCollection}
`;

export const list = gql`
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

export const pathedSandboxes = gql`
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

export const recentSandboxes = gql`
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

export const searchSandboxes = gql`
  query SearchSandboxes {
    me {
      sandboxes(orderBy: { field: "updated_at", direction: DESC }) {
        ...Sandbox
      }
    }
  }
  ${Sandbox}
`;

export const deletedSandboxes = gql`
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

export const team = gql`
  query Team($id: ID!) {
    me {
      team(id: $id) {
        ...Team
      }
    }
  }
  ${Team}
`;
