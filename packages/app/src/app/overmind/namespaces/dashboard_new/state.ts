import { Derive } from 'app/overmind';
import { sortBy, countBy } from 'lodash-es';
import { Direction } from 'app/overmind/graphql-global-types';
import getTemplate, { TemplateType } from '@codesandbox/common/lib/templates';
import { Sandbox } from './graphql-types/Sandbox';

export type OrderBy = {
  order: Direction;
  field: string;
};

type State = {
  selectedSandboxes: string[];
  trashSandboxIds: string[];
  isDragging: boolean;
  orderBy: OrderBy;
  filters: {
    blacklistedTemplates: string[];
    search: string;
  };
  teams: any[];
  currentTeam: any;
  sandboxes: {
    [id: string]: Sandbox;
  };
  error: string;
  sidebarCollection: any[];
  isTemplateSelected: Derive<State, (templateName: string) => boolean>;
  currentSandboxes: Derive<State, Sandbox[]>;
  mostUsedTemplate: Derive<State, any>;
};

export const state: State = {
  selectedSandboxes: [],
  sidebarCollection: [],
  sandboxes: {},
  currentTeam: null,
  teams: [],
  error: null,
  trashSandboxIds: [],
  isDragging: false,
  orderBy: {
    order: Direction.DESC,
    field: 'updatedAt',
  },
  filters: {
    blacklistedTemplates: [],
    search: '',
  },
  isTemplateSelected: ({ filters }) => templateName =>
    !filters.blacklistedTemplates.includes(templateName),
  mostUsedTemplate: ({ currentSandboxes }) => {
    const countedByTemplates = countBy(
      currentSandboxes,
      s => s.source.template
    );
    const mostUsedTemplateInfo = Object.keys(countedByTemplates).reduce(
      (prev, template) => {
        const count = countedByTemplates[template];
        if (count > prev.count) {
          return {
            count,
            template,
          };
        }

        return prev;
      },
      { count: 0, template: '' }
    );

    if (mostUsedTemplateInfo.count > 0) {
      return getTemplate(mostUsedTemplateInfo.template as TemplateType);
    }

    return null;
  },
  currentSandboxes: ({ orderBy, filters, sandboxes }) => {
    const orderField = orderBy.field;
    const orderOrder = orderBy.order;
    const { blacklistedTemplates } = filters;

    const isDateField =
      orderField === 'insertedAt' || orderField === 'updatedAt';

    let orderedSandboxes = (sortBy(sandboxes, s => {
      if (isDateField) {
        return +new Date(s[orderField]);
      }

      if (orderField === 'title') {
        return s.title || s.id;
      }

      return s[orderField];
    }) as Sandbox[]).filter(
      sandbox =>
        blacklistedTemplates.indexOf(sandbox.source.template) === -1 &&
        !sandbox.customTemplate
    );

    if (orderOrder === Direction.DESC) {
      orderedSandboxes = orderedSandboxes.reverse();
    }

    return orderedSandboxes;
  },
};
