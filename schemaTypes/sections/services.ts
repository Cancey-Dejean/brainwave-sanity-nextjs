import { Rule } from "sanity";


export const services = {
  name: "services",
  type: "object",
  title: "Services",
  fields: [
    {
      name: "heading",
      title: "Heading",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "featuredCardImage",
      title: "Featured Card Image",
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
      name: "featuredCardTitle",
      title: "Featured Card Title",
      type: "string",
    },
    {
      name: "featuredCardDesc",
      title: "Featured Card Description",
      type: "text",
    },
    {
      name: "featuredCardItemList",
      type: "array",
      title: "Featured Service Item List",
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
      name: "serviceCard1Image",
      title: "Service Card 1 Image",
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
      name: "serviceCard1Title",
      title: "Service Card 1 Title",
      type: "string",
    },
    {
      name: "serviceCard1Desc",
      title: "Service Card 1 Description",
      type: "text",
    },
    {
      name: "serviceCard1ChatMessage",
      title: "Service Card 1 Chat Message",
      type: "string",
    },
    {
      name: "serviceCard2Image",
      title: "Service Card 2 Image",
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
      name: "serviceCard2Title",
      title: "Service Card 2 Title",
      type: "string",
    },
    {
      name: "serviceCard2Desc",
      title: "Service Card 2 Description",
      type: "text",
    },
    {
      name: "serviceCard2ChatMessage",
      title: "Service Card 2 Chat Message",
      type: "string",
    },
  ],
};
