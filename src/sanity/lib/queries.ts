import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "microgreens"]{ 
    _id, 
    name, 
    description, 
    slug,
    mainImage,
}`);

export const All_Questions =
  defineQuery(`*[_type == "frequentlyAskedQuestions"]{
  _id, 
  question, 
  details, 
}`);
