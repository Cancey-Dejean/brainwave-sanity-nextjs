import { client } from "../../libs/sanity";
import { PageContent } from "../../components/PageContent";

export const dynamic = "force-dynamic";
async function getData() {
  const query = `* [slug.current == "/"][0] {
    sections[] {
      _type == "hero" => {
        ...,
        "mainImage": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
        socialProof [] {
          _key,
          title,
          "iconUrl": iconUrl.asset->url,
          "alt": iconUrl.alt,
          url
        },
      },
      _type == "benefits" => {
          ...,
          cards [] {
            ...,
            "iconUrl": iconUrl.asset->url,
            "alt": iconUrl.alt,
          }
      },
      _type == "collaboration" => {
        ...,
       "centerImage": centerImage.asset->url,
       collabApps [] {
         ...,
         "icon": icon.asset->url,
       }
      },
      _type == "services" => {
        ...,
        "featuredCardImage": featuredCardImage.asset->url,
        "featuredCardImageAlt": featuredCardImage.alt,
        "serviceCard1Image": serviceCard1Image.asset->url,
        "serviceCard1ImageAlt": serviceCard1Image.alt,
        "serviceCard2Image": serviceCard2Image.asset->url,
        "serviceCard2ImageAlt": serviceCard2Image.alt,
      },
      _type == "pricing" => {
        ...,
        "mainImage": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
      },
      _type == "roadmap" => {
        ...,
        roadmapCards [] {
        ...,
        "mainImage": mainImage.asset->url,
        "mainImageAlt": mainImage.alt,
        }
      },
    }
  }`;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const pages = await getData();
  const sections: any = pages.sections;
  // console.log(sections[0].socialProof[0].title);

  return <>{sections.map(PageContent)}</>;
}
