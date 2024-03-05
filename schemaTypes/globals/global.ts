import { Rule } from "sanity";

export default {
  name: "globals",
  type: "document",
  title: "Globals",
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
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "menu",
      type: "array",
      title: "Menu",
      validation: (Rule: Rule) => [
        Rule.required().min(3).error('A minimum of 3 items is required'),
        Rule.max(4).error('A maxiumum of 4 links is recommended'),
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
      validation: (Rule: Rule) => Rule.max(1).error('A maxiumum of 2 CTA Link Types is recommended'),
      of: [
        {
          name: "navLink",
          type: "navLink",
        },
      ],
    },


    // {
    //   name: "sections",
    //   type: "array",
    //   title: "Sections",
    //   of: [
    //     {
    //       name: "header",
    //       type: "header",
    //       limit: 1,
    //     },
    //   ],
    // },
  ],
};
