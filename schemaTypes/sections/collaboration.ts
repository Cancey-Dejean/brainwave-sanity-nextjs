import { Rule } from "sanity";

export const collaboration = {
  name: "collaboration",
  type: "object",
  title: "Collaboration",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "collabText",
      title: "Collaboration Text",
      type: "text",
    },
    {
      name: "collabContent",
      type: "array",
      title: "Collaboration Content",
      validation: (Rule: Rule) => [
        Rule.required().min(1).error('A minimum of 1 items is required'),
        Rule.max(3).error('A maxiumum of 3 items is recommended'),
      ],
      of: [
        {
          name: "checkTextRow",
          type: "checkTextRow",
        },
      ],
    },
    {
      name: "btnText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "btnLink",
      title: "Button Link",
      type: "string",
    },
    {
      name: "collabApps",
      type: "array",
      title: "Collaboration Apps",
      validation: (Rule: Rule) => [
        Rule.required().min(1).error('A minimum of 1 items is required'),
        Rule.max(8).error('A maxiumum of 8 items is recommended'),
      ],
      of: [
        {
          name: "collabApp",
          type: "collabApp",
        },
      ],
    },
  ],
};
