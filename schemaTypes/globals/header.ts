import { Rule } from "sanity";

export const header = {
  name: "headers",
  type: "document",
  title: "Headers",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "logo",
      type: "image",
      title: "Logo",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "menu",
      type: "array",
      title: "Menu",
      validation: (Rule: Rule) => [
        Rule.required().min(3).error('A minimum of 3 items is required'),
        Rule.max(6).error('A maxiumum of 6 links is recommended'),
      ],
      of: [
        {
          name: "navLink",
          type: "navLink",
        },
      ],
    },
    {
      name: "ctaFields",
      type: "array",
      title: "CTA Fields",
      validation: (Rule: Rule) => Rule.max(2).error('A maxiumum of 2 CTA Link Types is recommended'),
      of: [
        {
          name: "navLink",
          type: "navLink",
        },
        {
          name: "button",
          type: "button",
        },
      ],
    },
  ],
};
