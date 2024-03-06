import { client } from "@/libs/sanity";
import { PageContent } from "../../components/PageContent";



async function getData() {
  const query = `* [slug.current == "/"][0] {
    sections[] {
      _type == "hero" => {
        ...,
        "mainImage": mainImage.asset->url,
        socialProof [] {
           _key,
           title,
           "iconUrl": iconUrl.asset->url,
           url
        },
      },
    }
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const pages = await getData();
  const sections: any = pages.sections;
  console.log(sections[0].socialProof[0].title);


  return <>{sections.map(PageContent)}</>;
}
