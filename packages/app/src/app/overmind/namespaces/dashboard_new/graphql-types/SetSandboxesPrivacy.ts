/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SetSandboxesPrivacy
// ====================================================

export interface SetSandboxesPrivacy_setSandboxesPrivacy_source {
  template: string | null;
}

export interface SetSandboxesPrivacy_setSandboxesPrivacy_customTemplate {
  id: string | null;
}

export interface SetSandboxesPrivacy_setSandboxesPrivacy_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface SetSandboxesPrivacy_setSandboxesPrivacy_collection {
  path: string | null;
  teamId: string | null;
}

export interface SetSandboxesPrivacy_setSandboxesPrivacy {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: SetSandboxesPrivacy_setSandboxesPrivacy_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: SetSandboxesPrivacy_setSandboxesPrivacy_customTemplate | null;
  forkedTemplate: SetSandboxesPrivacy_setSandboxesPrivacy_forkedTemplate | null;
  collection: SetSandboxesPrivacy_setSandboxesPrivacy_collection | null;
}

export interface SetSandboxesPrivacy {
  setSandboxesPrivacy:
    | (SetSandboxesPrivacy_setSandboxesPrivacy | null)[]
    | null;
}

export interface SetSandboxesPrivacyVariables {
  sandboxIds: (string | null)[];
  privacy: number;
}
