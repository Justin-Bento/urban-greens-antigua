import { defineField, defineType } from "sanity";

export const testimonials = defineType({
  name: "testimonials",
  title: "testimonials",
  type: "document",
  fields: [
    defineField({
      name: "statement",
      title: "Write a Compelling Statement.",
      description: "The testimonial must be credible, current and compelling.",
      type: "string",
    }),
    defineField({
      name: "name",
      title: "Share The Persons Name",
      type: "string",
    }),
    defineField({
      name: "handle",
      title: "Share Their Social handel.",
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
  ],
});
