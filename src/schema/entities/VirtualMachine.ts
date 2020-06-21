import { GraphEntityTypeMeta } from "../schemaTypes";
import { ENTITY_CLOUD_RESOURCE } from "./CloudResource";

export const ENTITY_VIRTUAL_MACHINE: GraphEntityTypeMeta = {
  id: "VIRTUAL_MACHINE",
  name: "Virtual Machine",
  description: "",
  extends: ENTITY_CLOUD_RESOURCE,
  properties: []
};
