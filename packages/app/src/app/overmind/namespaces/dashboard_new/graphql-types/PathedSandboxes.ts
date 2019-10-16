/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PathedSandboxes
// ====================================================

export interface PathedSandboxes_me_collections {
  id: string | null;
  path: string | null;
}

export interface PathedSandboxes_me_collection_sandboxes_source {
  template: string | null;
}

export interface PathedSandboxes_me_collection_sandboxes_customTemplate {
  id: string | null;
}

export interface PathedSandboxes_me_collection_sandboxes_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface PathedSandboxes_me_collection_sandboxes_collection {
  path: string | null;
  teamId: string | null;
}

export interface PathedSandboxes_me_collection_sandboxes {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: PathedSandboxes_me_collection_sandboxes_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: PathedSandboxes_me_collection_sandboxes_customTemplate | null;
  forkedTemplate: PathedSandboxes_me_collection_sandboxes_forkedTemplate | null;
  collection: PathedSandboxes_me_collection_sandboxes_collection | null;
}

export interface PathedSandboxes_me_collection {
  id: string | null;
  path: string | null;
  sandboxes: (PathedSandboxes_me_collection_sandboxes | null)[] | null;
}

export interface PathedSandboxes_me {
  collections: (PathedSandboxes_me_collections | null)[] | null;
  collection: PathedSandboxes_me_collection | null;
}

export interface PathedSandboxes {
  /**
   * Get current user
   */
  me: PathedSandboxes_me | null;
}

export interface PathedSandboxesVariables {
  path: string;
  teamId?: string | null;
}
