/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Sandbox
// ====================================================

export interface Sandbox_source {
  template: string | null;
}

export interface Sandbox_customTemplate {
  id: string | null;
}

export interface Sandbox_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface Sandbox_collection {
  path: string | null;
  teamId: string | null;
}

export interface Sandbox {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: Sandbox_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: Sandbox_customTemplate | null;
  forkedTemplate: Sandbox_forkedTemplate | null;
  collection: Sandbox_collection | null;
}
