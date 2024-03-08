import { Rule } from "sanity";

export const roadmapCard = {
    name: "roadmapCard",
    type: "object",
    title: "Roadmap Card",
    fields: [
      {
        name: "colorful",
        title: "Colorful",
        type: "boolean",
      },
      {
        name: "date",
        title: "Date",
        type: "string",
      },
      {
        name: "status",
        title: "Status",
        type: "string",
        initialValue: "in progress",
        options: {
            list: [
                { title: "In Progress", value: "in progress" },
                { title: "Done", value: "done" },
            ],
        },
        validation: (Rule: Rule) => Rule.required(),
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
        validation: (Rule: Rule) => Rule.required(),
      },
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
    ],
  };
