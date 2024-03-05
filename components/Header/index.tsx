import { client } from "@/libs/sanity";
import HeaderContent from "./HeaderContent";

async function getData() {
  const query = `* [_type == "headers"] {
    _type,
    title,
    menu,
    "logoImage": logo.asset->url,
    ctaFields [_type == "navLink" || _type == "button"]
    }
  `;

  const data = await client.fetch(query);

  return data;
}

export const navigation = [
  {
    id: "0",
    label: "Features",
    url: "#features",
    onlyMobile: false,
  },
  {
    id: "1",
    label: "Pricing",
    url: "#pricing",
    onlyMobile: false,
  },
  {
    id: "2",
    label: "How to use",
    url: "#how-to-use",
    onlyMobile: false,
  },
  {
    id: "3",
    label: "Roadmap",
    url: "#roadmap",
    onlyMobile: false,
  },
  {
    id: "4",
    label: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    label: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

type Item = {
  _key: string;
  title: string;
  url: string;
  onlyMobile: boolean;
}

export type HeaderProps = {
  logoImage?: string;
  logoAlt?: string;
  logoText?: string;
  ctaLinkText?: string;
  ctaLinkUrl?: string;
  ctaButtonText: string;
  ctaButtonUrl: string;
  menu: Item[]
};

export default async function Header({}: HeaderProps) {


  const headers = await getData();
  const header: any = headers[0];
  console.log(header);

  return (
   <HeaderContent logoImage={header.logoImage} menu={header.menu}  ctaLinkText={header.ctaFields[0].title} ctaLinkUrl={header.ctaFields[0].url} ctaButtonText={header.ctaFields[1].label} ctaButtonUrl={header.ctaFields[1].href} />
  );
}
