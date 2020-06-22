import { GraphEntityTypeMeta } from "../schemaTypes";
import { VALUE_STRING } from "./values/primitives";

/**
 * This is a stub entity which only purpose is to be the parent entity of all
 * entities so all can share common propreties like id and name.
 */
export const ENTITY_ANY: GraphEntityTypeMeta = {
  id: "ANY",
  name: "Any",
  properties: [
    {
      id: "id",
      name: "ID",
      description: "A unique identifier for this entity.",
      valueType: VALUE_STRING
    },
    {
      id: "name",
      name: "Name",
      description: "A user friendly display name for this entity",
      valueType: VALUE_STRING
    }
  ]
};
