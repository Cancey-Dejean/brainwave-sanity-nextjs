export default {
  name: "pages",
  type: "document",
  title: "Pages",
  groups: [
    {
      name: "seo",
      title: "SEO",
    },
    {
      name: "pageBuilder",
      title: "Page Builder",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      group: "seo",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      group: "seo",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      group: "seo",
    },
    {
      name: "sections",
      type: "array",
      title: "Sections",
      of: [
        {
          name: "hero",
          type: "hero",
        },
        {
          name: "benefits",
          type: "benefits",
        },
        {
          name: "collaboration",
          type: "collaboration",
        },
        {
          name: "services",
          type: "services",
        },
        {
          name: "pricing",
          type: "pricing",
        },
        {
          name: "roadmap",
          type: "roadmap",
        },
      ],
      group: "pageBuilder",
    },
  ],
};
