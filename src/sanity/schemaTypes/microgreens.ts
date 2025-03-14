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
    defineField({
      name: "description",
      title: "Description of Product",
      type: "string",
    }),
    defineField({
      name: "mainImage",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),
    defineField({
      name: "price",
      title: "Price By Ounces",
      type: "number",
    }),
    defineField({
      name: "flavour",
      title: "Overview of Microgreen Flavour",
      type: "string",
    }),
    defineField({
      name: "nutrients",
      title: "Nutrients for this Microgreen",
      type: "string",
    }),
    defineField({
      name: "colour",
      title: "Explain the colour of the microgreern",
      type: "string",
    }),
  ],
});
