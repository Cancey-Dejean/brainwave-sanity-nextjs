import { Rule } from "sanity";

export const pricing = {
  name: "pricing",
  type: "object",
  title: "Pricing",
  fields: [
    {
      name: "tag",
      title: "Tag",
      type: "string",
    },
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "linkText",
      title: "Link Text",
      type: "string",
    },
    {
      name: "linkUrl",
      title: "Link Url",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
    {
      name: "pricingCards",
      type: "array",
      title: "Pricing Cards",
      validation: (Rule: Rule) => [
        Rule.required().min(2).error('A minimum of 2 items is required'),
        Rule.max(3).error('A maxiumum of 3 links is recommended'),
      ],
      of: [
        {
          name: "pricingCard",
          type: "pricingCard",
        },
      ],
    },
  ],
};
