export const header = {
  name: "header",
  type: "object",
  title: "Header",
  fields: [
    {
      name: "logo",
      type: "image",
      title: "Logo",
    },
    {
      name: "menu",
      type: "array",
      title: "menu",
      of: [
        {
          name: "navLink",
          type: "navLink",
        },
      ],
    },
  ],
};
