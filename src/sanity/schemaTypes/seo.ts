import { defineField, defineType } from "sanity";

export const seoType = defineType({
  name: "seo",
  title: "SEO",
  type: "object",
  options: {
    collapsible: false,
  },
  fieldsets: [
    {
      name: "search",
      title: "Search engines (Google)",
      options: { collapsible: false },
    },
    {
      name: "canonical",
      title: "Canonical",
      options: { collapsible: false },
    },
    {
      name: "social",
      title: "Social meta (Facebook, LinkedIn, WhatsApp, X)",
      options: { collapsible: false },
    },
    {
      name: "twitter",
      title: "Twitter / X overrides (optional)",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "robots",
      title: "Robots",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    defineField({
      name: "metaTitle",
      title: "Meta title",
      type: "string",
      fieldset: "search",
      description:
        "Google / browser title. Leave blank to use the post title. Ideal about 50-60 chars.",
      validation: (rule) =>
        rule.max(70).warning("Keep under 60 characters when possible"),
    }),
    defineField({
      name: "metaDescription",
      title: "Meta description",
      type: "text",
      rows: 3,
      fieldset: "search",
      description:
        "Google snippet text. Leave blank to use the excerpt. Ideal about 150-160 chars.",
      validation: (rule) =>
        rule.max(180).warning("Keep under 160 characters when possible"),
    }),
    defineField({
      name: "focusKeyword",
      title: "Focus keyword",
      type: "string",
      fieldset: "search",
    }),
    defineField({
      name: "keywords",
      title: "Secondary keywords",
      type: "array",
      fieldset: "search",
      of: [{ type: "string" }],
      options: { layout: "tags" },
    }),
    defineField({
      name: "canonicalUrl",
      title: "Canonical URL",
      type: "url",
      fieldset: "canonical",
      description:
        "Full URL for this post (no trailing slash). Leave blank for default: https://ucascalculator.com/blogs/{slug}",
      validation: (rule) =>
        rule.uri({
          allowRelative: false,
          scheme: ["https", "http"],
        }),
      placeholder: "https://ucascalculator.com/blogs/your-post-slug",
    }),
    defineField({
      name: "ogTitle",
      title: "Social meta title",
      type: "string",
      fieldset: "social",
      description:
        "Title when shared on Facebook, LinkedIn, WhatsApp, etc. Falls back to Meta title.",
      validation: (rule) => rule.max(95),
    }),
    defineField({
      name: "ogDescription",
      title: "Social meta description",
      type: "text",
      rows: 3,
      fieldset: "social",
      description:
        "Description when shared on social apps. Falls back to Meta description.",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "ogImage",
      title: "Social share image",
      type: "image",
      fieldset: "social",
      description: "Recommended 1200x630. Falls back to main image.",
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
      fieldset: "twitter",
      description: "Optional. Falls back to Social meta title.",
      validation: (rule) => rule.max(70),
    }),
    defineField({
      name: "twitterDescription",
      title: "Twitter / X description",
      type: "text",
      rows: 2,
      fieldset: "twitter",
      description: "Optional. Falls back to Social meta description.",
      validation: (rule) => rule.max(200),
    }),
    defineField({
      name: "twitterImage",
      title: "Twitter / X image",
      type: "image",
      fieldset: "twitter",
      description: "Optional. Falls back to Social share image.",
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
      name: "noIndex",
      title: "No index",
      type: "boolean",
      fieldset: "robots",
      description: "Hide this post from search engines",
      initialValue: false,
    }),
    defineField({
      name: "noFollow",
      title: "No follow",
      type: "boolean",
      fieldset: "robots",
      description: "Ask crawlers not to follow links on this page",
      initialValue: false,
    }),
  ],
});
