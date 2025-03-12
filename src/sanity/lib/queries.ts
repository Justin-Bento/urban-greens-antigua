import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(
  `*[_type == "microgreens"]{_id, title, slug{current}}`
);
