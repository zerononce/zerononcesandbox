/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: AddToCollection
// ====================================================

export interface AddToCollection_addToCollection_sandboxes_source {
  template: string | null;
}

export interface AddToCollection_addToCollection_sandboxes_customTemplate {
  id: string | null;
}

export interface AddToCollection_addToCollection_sandboxes_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface AddToCollection_addToCollection_sandboxes_collection {
  path: string | null;
  teamId: string | null;
}

export interface AddToCollection_addToCollection_sandboxes {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: AddToCollection_addToCollection_sandboxes_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: AddToCollection_addToCollection_sandboxes_customTemplate | null;
  forkedTemplate: AddToCollection_addToCollection_sandboxes_forkedTemplate | null;
  collection: AddToCollection_addToCollection_sandboxes_collection | null;
}

export interface AddToCollection_addToCollection {
  sandboxes: (AddToCollection_addToCollection_sandboxes | null)[] | null;
}

export interface AddToCollection {
  /**
   * Add sandboxes to a collection
   */
  addToCollection: AddToCollection_addToCollection | null;
}

export interface AddToCollectionVariables {
  collectionPath: string;
  sandboxIds: (string | null)[];
  teamId?: string | null;
}
