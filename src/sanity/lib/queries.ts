import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "microgreens"]{ 
    _id, 
    name, 
    description, 
    slug,
    mainImage,
}`);

export const POST_QUERY =
  defineQuery(`*[_type == "microgreens" && slug.current == $slug][0]{
    _id, 
    name,  
    description, 
    price {
      product, 
      size,
    },
    mainImage,
    flavour,
    colour,
    nutrients
  // ...
}`);

export const All_Questions =
  defineQuery(`*[_type == "frequentlyAskedQuestions"]{
  _id, 
  question, 
  details, 
}`);

export const frontpage_questions =
  defineQuery(`*[_type == "frequentlyAskedQuestions"][0...6]{
  _id, 
  question, 
  details, 
}`);
