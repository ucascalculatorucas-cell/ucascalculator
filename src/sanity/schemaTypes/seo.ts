import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  groups: [
    { name: "basic", title: "Basic", default: true },
    { name: "social", title: "Social / Open Graph" },
    { name: "advanced", title: "Advanced" },
  ],
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      group: "basic",
      description:
        "Browser tab / Google title. Leave blank to use the post title. Ideal ~50–60 chars.",
      validation: (rule) => rule.max(70).warning("Keep under 60 characters when possible"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      group: "basic",
      description:
        "Google snippet text. Leave blank to use the excerpt. Ideal ~150–160 chars.",
      validation: (rule) =>
        rule.max(180).warning("Keep under 160 characters when possible"),
    }),
    defineField({
      name: "focusKeyword",
      title: "Focus keyword",
      type: "string",
      group: "basic",
      description: "Primary keyword this article targets",
    }),
    defineField({
      name: "keywords",
      title: "Secondary keywords",
      type: "array",
      group: "basic",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      group: "advanced",
      description:
        "Optional override. Leave blank to use https://ucascalculator.com/blogs/{slug}/",
      validation: (rule) =>
        rule.uri({
          allowRelative: false,
          scheme: ["https", "http"],
        }),
    }),
    defineField({
      name: "noIndex",
      title: "No index",
      type: "boolean",
      group: "advanced",
      description: "Hide this post from search engines",
      initialValue: false,
    }),
    defineField({
      name: "noFollow",
      title: "No follow",
      type: "boolean",
      group: "advanced",
      description: "Ask crawlers not to follow links on this page",
      initialValue: false,
    }),
    defineField({
      name: "ogTitle",
      title: "OG / social title",
      type: "string",
      group: "social",
      description: "Facebook, LinkedIn, etc. Falls back to meta title → post title",
      validation: (rule) => rule.max(95),
    }),
    defineField({
      name: "ogDescription",
      title: "OG / social description",
      type: "text",
      rows: 3,
      group: "social",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "ogImage",
      title: "OG / social image",
      type: "image",
      group: "social",
      description: "Recommended 1200×630. Falls back to main image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "twitterTitle",
      title: "Twitter / X title",
      type: "string",
      group: "social",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "twitterDescription",
      title: "Twitter / X description",
      type: "text",
      rows: 2,
      group: "social",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "twitterImage",
      title: "Twitter / X image",
      type: "image",
      group: "social",
      description: "Falls back to OG image → main image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
  ],
});
