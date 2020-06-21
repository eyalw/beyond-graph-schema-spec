import { GraphEntityTypeMeta } from "./schemaTypes";
import { ENTITY_CLOUD_RESOURCE } from "./entities/CloudResource";
import { ENTITY_VIRTUAL_MACHINE } from "./entities/VirtualMachine";

export const entityTypes: GraphEntityTypeMeta[] = [
  ENTITY_CLOUD_RESOURCE,
  ENTITY_VIRTUAL_MACHINE
];
