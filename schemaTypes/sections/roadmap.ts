export const roadmap = {
  name: "roadmap",
  type: "object",
  title: "Roadmap",
  fields: [
    {
      name: "heading",
      type: "string",
    },
    {
      name: "tagline",
      type: "string",
    },
    {
      name: "excerpt",
      type: "text",
    },
    {
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    },
  ],
};
