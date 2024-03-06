export const hero = {
  name: "hero",
  type: "object",
  title: "Hero",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "titleHighlight",
      title: "Title Highlight",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
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
      name: "imageText",
      title: "Image Text",
      type: "string",
    },
  ],
};
