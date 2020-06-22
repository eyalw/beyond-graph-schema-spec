import { GraphValueTypeMeta } from "../../schemaTypes";

export const VALUE_STRING: GraphValueTypeMeta = {
  id: "string",
  name: "Text",
  gqlType: "String"
};

export const VALUE_INT: GraphValueTypeMeta = {
  id: "number",
  name: "Number",
  gqlType: "Int"
};

export const VALUE_BOOLEAN: GraphValueTypeMeta = {
  id: "boolean",
  name: "Boolean",
  gqlType: "Boolean"
};
