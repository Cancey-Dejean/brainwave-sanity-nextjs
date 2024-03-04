import { PortableTextBlock } from "sanity";

export type Page = {
  _id: string;
  _createdAt: Date;
  title: string;
  slug: string;
  sections: [];
  content: PortableTextBlock[];
};

export type PageParamProps = {
  params: {
    slug: string;
  };
};
