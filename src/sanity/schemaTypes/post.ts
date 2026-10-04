import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "author", title: "Author" },
    { name: "seo", title: "SEO" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      group: "content",
      description: "Short summary shown on the blog index and as SEO fallback",
      validation: (rule) => rule.required().max(320),
    }),
    defineField({
      name: "tag",
      title: "Category / tag",
      type: "string",
      group: "content",
      options: {
        list: [
          { title: "Tariff News", value: "Tariff News" },
          { title: "Results Day", value: "Results Day" },
          { title: "Qualification Guides", value: "Qualification Guides" },
          { title: "IB Deep-Dive", value: "IB Deep-Dive" },
          { title: "Subject Tips", value: "Subject Tips" },
          { title: "Scottish", value: "Scottish" },
          { title: "Clearing", value: "Clearing" },
          { title: "General", value: "General" },
        ],
      },
    }),
    defineField({
      name: "readTime",
      title: "Read time",
      type: "string",
      group: "content",
      description: 'e.g. "6 min"',
      initialValue: "5 min",
    }),
    defineField({
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
      group: "content",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated at",
      type: "datetime",
      group: "content",
      description: "Optional. Used for SEO dateModified when set",
    }),
    defineField({
      name: "mainImage",
      title: "Main image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (rule) =>
            rule.warning("Add alt text for accessibility and SEO"),
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
            { title: "Quote", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Strong", value: "strong" },
              { title: "Emphasis", value: "em" },
              { title: "Code", value: "code" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Link",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                    validation: (rule) =>
                      rule.uri({
                        allowRelative: true,
                        scheme: ["http", "https", "mailto"],
                      }),
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alt text",
            },
          ],
        },
      ],
    }),
    defineField({
      name: "authors",
      title: "Authors",
      type: "array",
      group: "author",
      of: [
        {
          type: "reference",
          to: [{ type: "author" }],
        },
      ],
      validation: (rule) => rule.min(1).warning("Add at least one author"),
    }),
    defineField({
      name: "seo",
      title: "SEO settings",
      type: "seo",
      group: "seo",
      description:
        "Canonical, meta title/description, and social meta title/description for sharing.",
      options: { collapsible: false },
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "mainImage",
      subtitle: "tag",
      author: "authors.0->name",
    },
    prepare({ title, media, subtitle, author }) {
      return {
        title,
        media,
        subtitle: [subtitle, author].filter(Boolean).join(" · "),
      };
    },
  },
});
