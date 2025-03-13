import { defineField, defineType } from "sanity";

export const frequentlyAskedQuestions = defineType({
  name: "frequentlyAskedQuestions",
  title: "frequentlyAskedQuestions",
  type: "document",
  fields: [
    defineField({
      name: "question",
      type: "string",
    }),
    defineField({
      name: "body",
      type: "blockContent",
    }),
  ],
});
