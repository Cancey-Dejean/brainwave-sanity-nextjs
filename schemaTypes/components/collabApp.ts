export const collabApp = {
    name: "collabApp",
    type: "object",
    title: "Collab App",
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "icon",
            title: "Icon",
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
            name: "width",
            title: "Width",
            type: "number",
        },
        {
            name: "height",
            title: "Height",
            type: "number",
        },
    ],
  };
