import { type SchemaTypeDefinition } from "sanity";
import { microgreens } from "./microgreens";
import { frequentlyAskedQuestions } from "./frequentlyAskedQuestions";
import { testimonials } from "./testimonials";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    microgreens,
    frequentlyAskedQuestions,
    testimonials,
    // ...
  ],
};
