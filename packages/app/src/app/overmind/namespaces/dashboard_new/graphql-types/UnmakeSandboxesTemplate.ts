/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UnmakeSandboxesTemplate
// ====================================================

export interface UnmakeSandboxesTemplate_unmakeSandboxesTemplates {
  id: string | null;
}

export interface UnmakeSandboxesTemplate {
  /**
   * Convert templates back to sandboxes
   */
  unmakeSandboxesTemplates:
    | (UnmakeSandboxesTemplate_unmakeSandboxesTemplates | null)[]
    | null;
}

export interface UnmakeSandboxesTemplateVariables {
  sandboxIds: (string | null)[];
}
