import { Action, AsyncAction } from 'app/overmind';
import { withLoadApp } from 'app/overmind/factories';

import { Direction } from 'app/overmind/graphql-global-types';
import { OrderBy } from './state';

export const recentSandboxesMounted: AsyncAction = withLoadApp(
  async ({ state, effects }) => {
    const dashboard = state.dashboard_new;

    try {
      dashboard.orderBy.field = 'updatedAt';
      dashboard.orderBy.order = Direction.DESC;

      const recentSandboxes = (await effects.dashboard_new.queries.recentSandboxes(
        {
          orderDirection: dashboard.orderBy.order,
          orderField: dashboard.orderBy.field,
        }
      )).me.sandboxes;

      Object.assign(
        dashboard.sandboxes,
        recentSandboxes.reduce((aggr, sandbox) => {
          aggr[sandbox.id] = sandbox;

          return aggr;
        }, {})
      );
    } catch (error) {
      state.dashboard_new.error = error.message;
    }
  }
);

export const sandboxesSelected: Action<{
  sandboxIds: string[];
}> = ({ state }, { sandboxIds }) => {
  state.dashboard.selectedSandboxes = sandboxIds;
};

export const setTrashSandboxes: Action<{
  sandboxIds: string[];
}> = ({ state }, { sandboxIds }) => {
  state.dashboard.trashSandboxIds = sandboxIds;
};

export const dragChanged: Action<{ isDragging: boolean }> = (
  { state },
  { isDragging }
) => {
  state.dashboard.isDragging = isDragging;
};

export const orderByChanged: Action<{ orderBy: OrderBy }> = (
  { state },
  { orderBy }
) => {
  state.dashboard.orderBy = orderBy;
};

export const blacklistedTemplateAdded: Action<{ template: string }> = (
  { state },
  { template }
) => {
  state.dashboard.filters.blacklistedTemplates.push(template);
};

export const blacklistedTemplateRemoved: Action<{ template: string }> = (
  { state },
  { template }
) => {
  state.dashboard.filters.blacklistedTemplates = state.dashboard.filters.blacklistedTemplates.filter(
    currentTemplate => currentTemplate !== template
  );
};

export const blacklistedTemplatesCleared: Action = ({ state }) => {
  state.dashboard.filters.blacklistedTemplates = [];
};

export const blacklistedTemplatesChanged: Action<{ templates: string[] }> = (
  { state },
  { templates }
) => {
  state.dashboard.filters.blacklistedTemplates = templates;
};

export const searchChanged: Action<{ search: string }> = (
  { state },
  { search }
) => {
  state.dashboard.filters.search = search;
};

export const createSandboxClicked: AsyncAction<{
  sandboxId: string;
  body: { collectionId: string | undefined };
}> = ({ actions }, { sandboxId, body }) =>
  actions.editor.internal.forkSandbox({ sandboxId, body });
