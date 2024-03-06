import { PageContent } from "../../../components/PageContent";
import { getPage } from "@/libs/sanity";
import { PageParamProps } from "@/types/Page";

export default async function Page({ params }: PageParamProps) {
  const pages = await getPage(params.slug);
  const sections: any = pages.sections;

  return <div>{sections.map(PageContent)}</div>;
}
