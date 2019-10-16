/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PathedSandboxesFolders
// ====================================================

export interface PathedSandboxesFolders_me_collections {
  id: string | null;
  path: string | null;
}

export interface PathedSandboxesFolders_me {
  collections: (PathedSandboxesFolders_me_collections | null)[] | null;
}

export interface PathedSandboxesFolders {
  /**
   * Get current user
   */
  me: PathedSandboxesFolders_me | null;
}

export interface PathedSandboxesFoldersVariables {
  teamId?: string | null;
}
