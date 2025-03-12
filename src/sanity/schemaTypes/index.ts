import { type SchemaTypeDefinition } from "sanity";
import { microgreens } from "./microgreens";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [microgreens],
};
