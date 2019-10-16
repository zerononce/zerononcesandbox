/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RenameSandbox
// ====================================================

export interface RenameSandbox_renameSandbox_source {
  template: string | null;
}

export interface RenameSandbox_renameSandbox_customTemplate {
  id: string | null;
}

export interface RenameSandbox_renameSandbox_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface RenameSandbox_renameSandbox_collection {
  path: string | null;
  teamId: string | null;
}

export interface RenameSandbox_renameSandbox {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: RenameSandbox_renameSandbox_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: RenameSandbox_renameSandbox_customTemplate | null;
  forkedTemplate: RenameSandbox_renameSandbox_forkedTemplate | null;
  collection: RenameSandbox_renameSandbox_collection | null;
}

export interface RenameSandbox {
  renameSandbox: RenameSandbox_renameSandbox | null;
}

export interface RenameSandboxVariables {
  id: string;
  title: string;
}
