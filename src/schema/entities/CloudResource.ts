import { GraphEntityTypeMeta } from "../schemaTypes";
import { VALUE_NETWORK_ACCESS } from "./values/networkAccess";
import { VALUE_STRING } from "./values/primitives";
import { ENTITY_ANY } from "./Any";

export const ENTITY_CLOUD_RESOURCE: GraphEntityTypeMeta = {
  id: "CLOUD_RESOURCE",
  name: "Cloud Resource",
  description:
    "Any compute resource hosted on the cloud performing some logic.",
  extends: ENTITY_ANY,
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
        id: "technologies",
        name: "Technologies",
        gqlType: "[Technology!]!"
      }
    },
    {
      id: "ip",
      name: "IP",
      valueType: VALUE_STRING
    }
  ]
};
