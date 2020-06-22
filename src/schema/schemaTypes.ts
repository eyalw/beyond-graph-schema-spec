export interface GraphSchemaMeta {
  entityTypes: GraphEntityTypeMeta[];
  relationshipTypes: GraphRelationshipTypeMeta[];
}

/** Entity type e.g. VirtualMachine, User, etc */
export interface GraphEntityTypeMeta {
  /** Identifier for this entity type. e.g. "VIRTUAL_MACHINE" */
  id: string;
  /** Display name for this entity type. e.g. "Virtual Machine" */
  name: string;
  /** A documentation of this entity type */
  description?: string;
  /** Optional icon of this type */
  icon?: string;
  /** Inherit properties from parent type */
  extends?: GraphEntityTypeMeta;
  /** Hide this relationship from the user. */
  hidden?: boolean;
  /** Properties that exist on this entity type */
  properties: GraphPropertyMeta[];
  // extraFilters: those that are not related to a property directly.
}

export interface GraphRelationshipTypeMeta {
  /** Identifier for this relationship. e.g. "ALERTED_ON", "RUNS" */
  id: string;
  /** Display name for this relationship. e.g. "Aler" */
  name: string;
  /** Display name for the reverse relationship */
  reversedName?: string;
  /** Short description of this property */
  description?: string;
  /** Hide this relationship from the user. */
  hidden?: boolean;
  /**
   * Valid edge paths, from entity types to entity types
   * e.g. [Any] => [Product].
   */
  validPaths: Array<{ from: GraphEntityTypeMeta[]; to: GraphEntityTypeMeta[] }>;
}

export interface GraphPropertyMeta {
  /** Identifier for this property. e.g. "networkAccess", "technologies" */
  id: string;
  /** Display name for this property e.g. "Network Access" */
  name: string;
  /** Short description of this property */
  description?: string;
  /** A description of the type of value this property contains */
  valueType: GraphValueTypeMeta;
  /** Hide this relationship from the user. */
  hidden?: boolean;
  /** If this property is not interesting to filter on, and just adds noise to filters list, hide it from filters */
  filterable?: boolean;
  // filters?: GraphFilterOperatorMeta[];
}

// value types ===
// primitives
// foreign keys => need to be resolved
// custom types (complex objects, arrays)
// enums

// enum, primitive or server list
export interface GraphValueTypeMeta {
  /** Identifier for this value type. e.g. "technology", "string" */
  id: string;
  /** Display name for this entity */
  name: string;
  /** Short description of this property */
  description?: string;
  /** name of a type from the GrpahQL schema. e.g. "String", "Technology" */
  gqlType?: string;
  /** Possible values. only applicable for enum types */
  enumValues?: GraphEnumValueMeta[];
}

/**
 * The metadata of a specific enum property value.
 * E.g. 'public' value for networkAccess property
 */
export interface GraphEnumValueMeta {
  value: string;
  /** Display name for this entity */
  name: string;
  /** Short description of this property */
  description?: string;
  /** Hide this relationship from the user. */
  hidden?: boolean;
}

export interface GraphFilterOperatorMeta {
  id: string;
  /** Display name for this entity */
  name: string;
  description?: string;

  valueType: GraphValueTypeMeta[];
}
