import { Rule } from "sanity";

export const gradientCard = {
    name: "gradientCard",
    type: "object",
    title: "Gradient Card",
    fields: [
      {
        name: "variant",
        title: "Variant",
        type: "string",
        initialValue: "Variant 1",
        options: {
            list: [
                { title: "Variant 1", value: "v1" },
                { title: "Variant 2", value: "v2" },
                { title: "Variant 3", value: "v3" },
                { title: "Variant 4", value: "v4" },
                { title: "Variant 5", value: "v5" },
                { title: "Variant 6", value: "v6" },
            ],
        },
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
      {
        name: "iconUrl",
        title: "Icon",
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
        name: "backgroundImage",
        title: "Background Image",
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
        name: "url",
        title: "Url",
        type: "string",
      },
      {
        name: "gradientLight",
        title: "Gradient Light",
        type: "boolean",
      },
    ],

  };
