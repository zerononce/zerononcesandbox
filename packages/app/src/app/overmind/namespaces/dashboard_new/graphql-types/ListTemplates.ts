/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ListTemplates
// ====================================================

export interface ListTemplates_me_templates_sandbox_source {
  template: string | null;
}

export interface ListTemplates_me_templates_sandbox_customTemplate {
  id: string | null;
}

export interface ListTemplates_me_templates_sandbox_forkedTemplate {
  id: string | null;
  color: string | null;
}

export interface ListTemplates_me_templates_sandbox_collection {
  path: string | null;
  teamId: string | null;
}

export interface ListTemplates_me_templates_sandbox {
  id: string | null;
  alias: string | null;
  title: string | null;
  description: string | null;
  insertedAt: string | null;
  updatedAt: string | null;
  privacy: number | null;
  screenshotUrl: string | null;
  screenshotOutdated: boolean | null;
  source: ListTemplates_me_templates_sandbox_source | null;
  /**
   * If the sandbox is a template this will be set
   */
  customTemplate: ListTemplates_me_templates_sandbox_customTemplate | null;
  forkedTemplate: ListTemplates_me_templates_sandbox_forkedTemplate | null;
  collection: ListTemplates_me_templates_sandbox_collection | null;
}

export interface ListTemplates_me_templates {
  color: string | null;
  iconUrl: string | null;
  id: string | null;
  published: boolean | null;
  sandbox: ListTemplates_me_templates_sandbox | null;
}

export interface ListTemplates_me {
  templates: (ListTemplates_me_templates | null)[] | null;
}

export interface ListTemplates {
  /**
   * Get current user
   */
  me: ListTemplates_me | null;
}

export interface ListTemplatesVariables {
  teamId?: string | null;
  showAll?: boolean | null;
}
