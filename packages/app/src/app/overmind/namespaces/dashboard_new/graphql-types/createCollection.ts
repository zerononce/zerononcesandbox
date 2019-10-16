/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateCollection
// ====================================================

export interface CreateCollection_createCollection {
  id: string | null;
  path: string | null;
}

export interface CreateCollection {
  /**
   * Create a collection
   */
  createCollection: CreateCollection_createCollection | null;
}

export interface CreateCollectionVariables {
  path: string;
  teamId?: string | null;
}
