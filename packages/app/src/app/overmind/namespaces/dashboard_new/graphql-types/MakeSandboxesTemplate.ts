/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MakeSandboxesTemplate
// ====================================================

export interface MakeSandboxesTemplate_makeSandboxesTemplates {
  id: string | null;
}

export interface MakeSandboxesTemplate {
  /**
   * Make templates from sandboxes
   */
  makeSandboxesTemplates:
    | (MakeSandboxesTemplate_makeSandboxesTemplates | null)[]
    | null;
}

export interface MakeSandboxesTemplateVariables {
  sandboxIds: (string | null)[];
}
