import { GraphEntityTypeMeta } from "../schemaTypes";
import { VALUE_NETWORK_ACCESS } from "./values/networkAccess";
import { VALUE_STRING } from "./values/primitives";

export const ENTITY_CLOUD_RESOURCE: GraphEntityTypeMeta = {
  id: "VIRTUAL_MACHINE",
  name: "Virtual Machine",
  description: "",
  properties: [
    {
      id: "networkAccess",
      name: "Network Access",
      description: "The type of access available to this cloud resource.",
      valueType: VALUE_NETWORK_ACCESS
    },
    {
      id: "technologies",
      name: "Running Technologies",
      description: "Technologies identified as running on this cloud resource",
      valueType: {
        id: "technology[]",
        name: "Technologies",
        schemaType: "[Technology!]!"
      }
    },
    {
      id: "ip",
      name: "IP",
      valueType: VALUE_STRING
    }
  ]
};
