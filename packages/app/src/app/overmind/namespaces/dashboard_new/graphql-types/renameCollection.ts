/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RenameCollection
// ====================================================

export interface RenameCollection_renameCollection {
  id: string | null;
  path: string | null;
}

export interface RenameCollection {
  /**
   * Rename a collection and all subfolders
   */
  renameCollection: (RenameCollection_renameCollection | null)[] | null;
}

export interface RenameCollectionVariables {
  path: string;
  newPath: string;
  teamId?: string | null;
  newTeamId?: string | null;
}
