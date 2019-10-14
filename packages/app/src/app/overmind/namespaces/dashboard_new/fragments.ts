import gql from 'graphql-tag';

export const SidebarCollection = gql`
  fragment SidebarCollection on Collection {
    id
    path
  }
`;

export const Sandbox = gql`
  fragment Sandbox on Sandbox {
    id
    alias
    title
    description
    insertedAt
    updatedAt
    privacy
    screenshotUrl
    screenshotOutdated

    source {
      template
    }

    customTemplate {
      id
    }

    forkedTemplate {
      id
      color
    }

    collection {
      path
      teamId
    }
  }
`;

export const Team = gql`
  fragment Team on Team {
    id
    name
    description
    creatorId

    users {
      id
      name
      username
      avatarUrl
    }

    invitees {
      id
      name
      username
      avatarUrl
    }
  }
`;

/*
export function addSandboxesToFolder(selectedSandboxes, path, teamId) {
  return client.mutate({
    mutation: ADD_SANDBOXES_TO_FOLDER_MUTATION,
    variables: {
      sandboxIds: selectedSandboxes,
      teamId,
      collectionPath: path,
    },
    optimisticResponse: {
      __typename: 'Mutation',
      addToCollection: {
        __typename: 'Collection',
        // We keep this empty, because it will be loaded later regardless. We
        // just want the main directory to update immediately
        sandboxes: [],
      },
    },

    refetchQueries: ['PathedSandboxes'],
  });
}

export function unmakeTemplates(selectedSandboxes, teamId) {
  return client.mutate({
    mutation: UNMAKE_SANDBOXES_TEMPLATE_MUTATION,
    variables: {
      sandboxIds: selectedSandboxes,
    },
    refetchQueries: [
      'DeletedSandboxes',
      'PathedSandboxes',
      'RecentSandboxes',
      'SearchSandboxes',
      'ListTemplates',
    ],
    update: cache => {
      try {
        const variables = {};

        if (teamId) {
          variables.teamId = teamId;
        }

        const oldTemplatesCache = cache.readQuery({
          query: LIST_TEMPLATES,
          variables,
        });

        const data = immer(oldTemplatesCache, draft => {
          draft.me.templates = draft.me.templates.filter(
            x => !selectedSandboxes.includes(x.sandbox.id)
          );
        });

        cache.writeQuery({
          query: LIST_TEMPLATES,
          variables,
          data,
        });
      } catch (e) {
        // cache doesn't exist, no biggie!
      }
    },
  });
}

export function makeTemplates(selectedSandboxes, teamId, collections) {
  return Promise.all([
    addSandboxesToFolder(selectedSandboxes, '/', teamId),
    client
      .mutate({
        mutation: MAKE_SANDBOXES_TEMPLATE_MUTATION,
        variables: {
          sandboxIds: selectedSandboxes.toJS
            ? selectedSandboxes.toJS()
            : selectedSandboxes,
        },
        refetchQueries: [
          'DeletedSandboxes',
          'PathedSandboxes',
          'RecentSandboxes',
          'SearchSandboxes',
          'ListTemplates',
        ],
        update: cache => {
          if (collections) {
            collections.forEach(({ path, teamId: cacheTeamId }) => {
              try {
                const variables = { path };

                if (cacheTeamId) {
                  variables.teamId = cacheTeamId;
                }

                const oldFolderCacheData = cache.readQuery({
                  query: PATHED_SANDBOXES_CONTENT_QUERY,
                  variables,
                });

                const data = immer(oldFolderCacheData, draft => {
                  draft.me.collection.sandboxes = oldFolderCacheData.me.collection.sandboxes.filter(
                    x => !selectedSandboxes.includes(x.id)
                  );
                });

                cache.writeQuery({
                  query: PATHED_SANDBOXES_CONTENT_QUERY,
                  variables,
                  data,
                });
              } catch (e) {
                // cache doesn't exist, no biggie!
              }
            });
          }
        },
      })
      .then(() => {
        notificationState.addNotification({
          title: `Successfully created ${selectedSandboxes.length} template${
            selectedSandboxes.length === 1 ? '' : 's'
          }`,
          status: NotificationStatus.SUCCESS,
          actions: {
            primary: [
              {
                label: 'Undo',
                run: () => {
                  track('Template - Removed', {
                    source: 'Undo',
                  });
                  unmakeTemplates(
                    selectedSandboxes.toJS
                      ? selectedSandboxes.toJS()
                      : selectedSandboxes
                  );
                },
              },
            ],
          },
        });
      }),
  ]);
}

export function undeleteSandboxes(selectedSandboxes) {
  client.mutate({
    mutation: ADD_SANDBOXES_TO_FOLDER_MUTATION,
    variables: {
      sandboxIds: selectedSandboxes.toJS
        ? selectedSandboxes.toJS()
        : selectedSandboxes,
      collectionPath: '/',
    },
    optimisticResponse: {
      __typename: 'Mutation',
      addToCollection: {
        __typename: 'Collection',
        // We keep this empty, because it will be loaded later regardless. We
        // just want the main directory to update immediately
        sandboxes: [],
      },
    },

    refetchQueries: ['DeletedSandboxes'],
  });
}

export function permanentlyDeleteSandboxes(selectedSandboxes) {
  client.mutate({
    mutation: PERMANENTLY_DELETE_SANDBOXES_MUTATION,
    variables: {
      sandboxIds: selectedSandboxes.toJS
        ? selectedSandboxes.toJS()
        : selectedSandboxes,
    },
    update: cache => {
      try {
        const oldDeleteCache = cache.readQuery({
          query: DELETED_SANDBOXES_CONTENT_QUERY,
        });

        const newDeleteCache = {
          ...oldDeleteCache,
          me: {
            ...oldDeleteCache.me,
            sandboxes: oldDeleteCache.me.sandboxes.filter(
              x => !selectedSandboxes.includes(x.id)
            ),
          },
        };

        cache.writeQuery({
          query: DELETED_SANDBOXES_CONTENT_QUERY,
          data: newDeleteCache,
        });
      } catch (e) {
        // cache doesn't exist, no biggie!
      }
    },
  });
}

export function deleteSandboxes(selectedSandboxes, collections = []) {
  client.mutate({
    mutation: DELETE_SANDBOXES_MUTATION,
    variables: {
      sandboxIds: selectedSandboxes.toJS
        ? selectedSandboxes.toJS()
        : selectedSandboxes,
    },
    refetchQueries: [
      'DeletedSandboxes',
      'PathedSandboxes',
      'RecentSandboxes',
      'SearchSandboxes',
    ],
    update: cache => {
      if (collections) {
        collections.forEach(({ path, teamId }) => {
          try {
            const variables = { path };

            if (teamId) {
              variables.teamId = teamId;
            }

            const oldFolderCacheData = cache.readQuery({
              query: PATHED_SANDBOXES_CONTENT_QUERY,
              variables,
            });

            const data = immer(oldFolderCacheData, draft => {
              draft.me.collection.sandboxes = oldFolderCacheData.me.collection.sandboxes.filter(
                x => !selectedSandboxes.includes(x.id)
              );
            });

            cache.writeQuery({
              query: PATHED_SANDBOXES_CONTENT_QUERY,
              variables,
              data,
            });
          } catch (e) {
            // cache doesn't exist, no biggie!
          }
        });
      }
    },
  });
}

export function setSandboxesPrivacy(selectedSandboxes, privacy) {
  client.mutate({
    mutation: SET_SANDBOXES_PRIVACY_MUTATION,
    variables: {
      sandboxIds: selectedSandboxes.toJS
        ? selectedSandboxes.toJS()
        : selectedSandboxes,
      privacy,
    },
  });
}
*/
