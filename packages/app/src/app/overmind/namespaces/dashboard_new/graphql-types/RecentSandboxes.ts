/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { Direction } from './../../../graphql-global-types';

// ====================================================
// GraphQL query operation: RecentSandboxes
// ====================================================

export interface RecentSandboxes_me_sandboxes_source {
  template: string | null;
}

export interface RecentSandboxes_me_sandboxes_customTemplate {
  id: string | null;
}

export interface RecentSandboxes_me_sandboxes_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface RecentSandboxes_me_sandboxes_collection {
  path: string | null;
  teamId: string | null;
}

export interface RecentSandboxes_me_sandboxes {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: RecentSandboxes_me_sandboxes_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: RecentSandboxes_me_sandboxes_customTemplate | null;
  forkedTemplate: RecentSandboxes_me_sandboxes_forkedTemplate | null;
  collection: RecentSandboxes_me_sandboxes_collection | null;
}

export interface RecentSandboxes_me {
  sandboxes: (RecentSandboxes_me_sandboxes | null)[] | null;
}

export interface RecentSandboxes {
  /**
   * Get current user
   */
  me: RecentSandboxes_me | null;
}

export interface RecentSandboxesVariables {
  orderField: string;
  orderDirection: Direction;
}
