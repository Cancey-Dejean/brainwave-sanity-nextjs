import { Rule } from "sanity";

export const footer = {
  name: "footers",
  type: "document",
  title: "Footers",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "socialLinks",
      type: "array",
      title: "Social Links",
      validation: (Rule: Rule) => [
        Rule.required().min(1).error('A minimum of 3 items is required'),
        Rule.max(5).error('A maxiumum of 4 links is recommended'),
      ],
      of: [
        {
          name: "imageLink",
          type: "imageLink",
        },
      ],
    },
  ],
};
