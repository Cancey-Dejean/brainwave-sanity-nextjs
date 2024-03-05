import { Rule } from "sanity";

export default {
  name: "siteSettings",
  type: "document",
  title: "Site Settings",
  validation: (Rule: Rule) => [
    Rule.required().min(1).error('A minimum of 1 items is required'),
    Rule.max(1).error('A maxiumum of 1 links is recommended'),
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
  ],
};
