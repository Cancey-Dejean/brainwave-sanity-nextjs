import { Section } from "../../components";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/libs/sanity";

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: "/images/socials/discord.svg",
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: "/images/socials/twitter.svg",
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: "/images/socials/instagram.svg",
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: "/images/socials/telegram.svg",
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: "/images/socials/facebook.svg",
    url: "#",
  },
];

async function getData() {
  const query = `* [_type == "footers"][] {
    title,
    socialLinks [] {
      _key,
      title,
      url,
      "iconUrl": iconUrl.asset->url
    }
  }`;

  const data = await client.fetch(query);

  return data;
}

type Item = {
  _key?: string;
  title?: string;
  url?: string;
  iconUrl?: string;
}

export type FooterProps = {
  socials?: Item[];
};

export default async function Footer({}: FooterProps) {
  const footers = await getData();
  const footer: any = footers;

  return (
    <footer className="mt-auto">
      <Section crosses className="!px-0 !py-10">
      <div className="container flex items-center justify-center gap-10 max-sm:flex-col sm:justify-between">
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex flex-wrap gap-5">
          {footer[0].socialLinks.map((item: Item) => (
            <Link
              key={item._key}
              href={item.url || "#"}
              target="_blank"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-n-7 transition-colors hover:bg-n-6"
            >
              <Image src={item.iconUrl || "#"} width={16} height={16} alt={item.title || "Social Icon"} />
            </Link>
          ))}
        </ul>
      </div>
    </Section>
    </footer>
  );
};
