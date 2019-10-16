/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteSandboxes
// ====================================================

export interface DeleteSandboxes_deleteSandboxes_source {
  template: string | null;
}

export interface DeleteSandboxes_deleteSandboxes_customTemplate {
  id: string | null;
}

export interface DeleteSandboxes_deleteSandboxes_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface DeleteSandboxes_deleteSandboxes_collection {
  path: string | null;
  teamId: string | null;
}

export interface DeleteSandboxes_deleteSandboxes {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: DeleteSandboxes_deleteSandboxes_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: DeleteSandboxes_deleteSandboxes_customTemplate | null;
  forkedTemplate: DeleteSandboxes_deleteSandboxes_forkedTemplate | null;
  collection: DeleteSandboxes_deleteSandboxes_collection | null;
}

export interface DeleteSandboxes {
  /**
   * Delete sandboxes
   */
  deleteSandboxes: (DeleteSandboxes_deleteSandboxes | null)[] | null;
}

export interface DeleteSandboxesVariables {
  sandboxIds: (string | null)[];
}
