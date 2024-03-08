import { Rule } from "sanity";

export const pricingCard = {
    name: "pricingCard",
    type: "object",
    title: "Pricing Card",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule: Rule) => Rule.required(),
      },
      {
        name: "price",
        title: "Price",
        type: "string",
      },
      {
        name: "features",
        type: "array",
        title: "Features",
        validation: (Rule: Rule) => [
          Rule.required().min(3).error('A minimum of 3 items is required'),
          Rule.max(6).error('A maxiumum of 6 links is recommended'),
        ],
        of: [
          {
            name: "checkTextRow",
            type: "checkTextRow",
          },
        ],
      },
    ],

  };
