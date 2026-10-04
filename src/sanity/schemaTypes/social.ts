import { defineField } from "sanity";

export const socialFields = [
  defineField({
    name: "twitter",
    title: "X / Twitter",
    type: "url",
    description: "Full profile URL, e.g. https://x.com/username",
  }),
  defineField({
    name: "linkedin",
    title: "LinkedIn",
    type: "url",
  }),
  defineField({
    name: "facebook",
    title: "Facebook",
    type: "url",
  }),
  defineField({
    name: "instagram",
    title: "Instagram",
    type: "url",
  }),
  defineField({
    name: "youtube",
    title: "YouTube",
    type: "url",
  }),
  defineField({
    name: "tiktok",
    title: "TikTok",
    type: "url",
  }),
  defineField({
    name: "bluesky",
    title: "Bluesky",
    type: "url",
  }),
  defineField({
    name: "github",
    title: "GitHub",
    type: "url",
  }),
  defineField({
    name: "website",
    title: "Personal / author website",
    type: "url",
  }),
];
