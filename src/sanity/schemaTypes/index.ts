import type { SchemaTypeDefinition } from "sanity";
import { authorType } from "./author";
import { postType } from "./post";
import { seoType } from "./seo";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, authorType, seoType],
};
