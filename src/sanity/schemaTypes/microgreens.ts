import { defineField, defineType } from "sanity";

export const microgreens = defineType({
  name: "microgreens",
  title: "Microgreens",
  type: "document",
  fields: [
    defineField({
      name: "name",
      type: "string",
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    }),
  ],
});
