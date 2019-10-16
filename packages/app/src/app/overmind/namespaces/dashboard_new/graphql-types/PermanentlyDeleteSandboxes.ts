/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: PermanentlyDeleteSandboxes
// ====================================================

export interface PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes_source {
  template: string | null;
}

export interface PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes_customTemplate {
  id: string | null;
}

export interface PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes_collection {
  path: string | null;
  teamId: string | null;
}

export interface PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes_customTemplate | null;
  forkedTemplate: PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes_forkedTemplate | null;
  collection: PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes_collection | null;
}

export interface PermanentlyDeleteSandboxes {
  permanentlyDeleteSandboxes:
    | (PermanentlyDeleteSandboxes_permanentlyDeleteSandboxes | null)[]
    | null;
}

export interface PermanentlyDeleteSandboxesVariables {
  sandboxIds: (string | null)[];
}
