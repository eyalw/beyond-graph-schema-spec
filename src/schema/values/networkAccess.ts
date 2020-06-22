import { GraphValueTypeMeta } from "../../schemaTypes";

export const VALUE_NETWORK_ACCESS: GraphValueTypeMeta = {
  id: "networkAccessType",
  name: "Network Access Type",
  enumValues: [
    {
      value: "public",
      name: "Public",
      description: "The cloud resource is accessible from any IP"
    },
    {
      value: "restricted_public",
      name: "Restricted Public",
      description: "I don't know what this means"
    },
    {
      value: "internal",
      name: "Internal",
      description: "I don't know what this means"
    },
    {
      value: "restricted_internal",
      name: "Restricted Internal",
      description: "I don't know what this means"
    }
  ]
};
