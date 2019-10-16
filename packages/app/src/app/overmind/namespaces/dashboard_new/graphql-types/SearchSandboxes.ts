/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SearchSandboxes
// ====================================================

export interface SearchSandboxes_me_sandboxes_source {
  template: string | null;
}

export interface SearchSandboxes_me_sandboxes_customTemplate {
  id: string | null;
}

export interface SearchSandboxes_me_sandboxes_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface SearchSandboxes_me_sandboxes_collection {
  path: string | null;
  teamId: string | null;
}

export interface SearchSandboxes_me_sandboxes {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: SearchSandboxes_me_sandboxes_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: SearchSandboxes_me_sandboxes_customTemplate | null;
  forkedTemplate: SearchSandboxes_me_sandboxes_forkedTemplate | null;
  collection: SearchSandboxes_me_sandboxes_collection | null;
}

export interface SearchSandboxes_me {
  sandboxes: (SearchSandboxes_me_sandboxes | null)[] | null;
}

export interface SearchSandboxes {
  /**
   * Get current user
   */
  me: SearchSandboxes_me | null;
}
