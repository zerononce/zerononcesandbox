/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: DeleteCollection
// ====================================================

export interface DeleteCollection_deleteCollection {
  id: string | null;
  path: string | null;
}

export interface DeleteCollection {
  /**
   * Delete a collection and all subfolders
   */
  deleteCollection: (DeleteCollection_deleteCollection | null)[] | null;
}

export interface DeleteCollectionVariables {
  path: string;
  teamId?: string | null;
}
