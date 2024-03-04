import { client } from "@/libs/sanity";
import { PageContent } from "../../components/PageContent";



async function getData() {
  const query = `* [slug.current == "/"][0] {
    sections[]
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const pages = await getData();
  const sections: any = pages.sections;
  console.log(sections);

  return <>{sections.map(PageContent)}</>;
}
