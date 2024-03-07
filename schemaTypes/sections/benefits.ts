import { Rule } from "sanity";

export const benefits = {
  name: "benefits",
  type: "object",
  title: "Benefits",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "cards",
      type: "array",
      title: "Cards",
      validation: (Rule: Rule) => [
        Rule.required().min(3).error('A minimum of 3 items is required'),
        Rule.max(6).error('A maxiumum of 6 links is recommended'),
      ],
      of: [
        {
          name: "gradientCard",
          type: "gradientCard",
        },
      ],
    },
  ],
};
