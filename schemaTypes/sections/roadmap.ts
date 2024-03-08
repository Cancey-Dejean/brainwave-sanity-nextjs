import { Rule } from "sanity";

export const roadmap = {
  name: "roadmap",
  type: "object",
  title: "Roadmap",
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
      name: "roadmapCards",
      type: "array",
      title: "Roadmap Cards",
      validation: (Rule: Rule) => [
        Rule.required().min(2).error('A minimum of 2 items is required'),
        Rule.max(4).error('A maxiumum of 4 links is recommended'),
      ],
      of: [
        {
          name: "roadmapCard",
          type: "roadmapCard",
        },
      ],
    },
    {
      name: "buttonText",
      title: "Button Text",
      type: "string",
    },
    {
      name: "buttonUrl",
      title: "Button Url",
      type: "string",
    },
  ],
};
