/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: DeletedSandboxes
// ====================================================

export interface DeletedSandboxes_me_sandboxes_source {
  template: string | null;
}

export interface DeletedSandboxes_me_sandboxes_customTemplate {
  id: string | null;
}

export interface DeletedSandboxes_me_sandboxes_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface DeletedSandboxes_me_sandboxes_collection {
  path: string | null;
  teamId: string | null;
}

export interface DeletedSandboxes_me_sandboxes {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: DeletedSandboxes_me_sandboxes_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: DeletedSandboxes_me_sandboxes_customTemplate | null;
  forkedTemplate: DeletedSandboxes_me_sandboxes_forkedTemplate | null;
  collection: DeletedSandboxes_me_sandboxes_collection | null;
  removedAt: string | null;
}

export interface DeletedSandboxes_me {
  sandboxes: (DeletedSandboxes_me_sandboxes | null)[] | null;
}

export interface DeletedSandboxes {
  /**
   * Get current user
   */
  me: DeletedSandboxes_me | null;
}
