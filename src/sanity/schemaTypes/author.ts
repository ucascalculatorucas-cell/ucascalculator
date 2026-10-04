import { defineField, defineType } from "sanity";
import { socialFields } from "./social";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  groups: [
    { name: "profile", title: "Profile", default: true },
    { name: "social", title: "Social" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Full name",
      type: "string",
      group: "profile",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "profile",
      options: { source: "name", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role / job title",
      type: "string",
      group: "profile",
      description: 'e.g. "Education Editor"',
    }),
    defineField({
      name: "bio",
      title: "Short bio",
      type: "text",
      rows: 4,
      group: "profile",
      validation: (rule) => rule.max(500),
    }),
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      group: "profile",
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
      name: "email",
      title: "Email",
      type: "string",
      group: "profile",
      validation: (rule) => rule.email(),
    }),
    defineField({
      name: "social",
      title: "Social profiles",
      type: "object",
      group: "social",
      options: { collapsible: true, collapsed: false },
      fields: socialFields,
    }),
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "role",
      media: "image",
    },
  },
});
