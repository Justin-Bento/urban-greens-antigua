import { type SchemaTypeDefinition } from "sanity";
import { microgreens } from "./microgreens";
import { frequentlyAskedQuestions } from "./frequentlyAskedQuestions";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    microgreens,
    frequentlyAskedQuestions,
    // ...
  ],
};
