import { Button, CheckTextRow } from "..";
import { brainwaveSymbol, check } from "../../public/images";
// import { collabApps, collabContent, collabText } from "../../constants";
// import Button from "../Button";
import Section from "../Section";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import Image from "next/image";


// export const collabContent = [
//   {
//     _key: "0",
//     title: "Seamless Integration",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad minus quibusdam voluptatem nisi sapiente mollitia illum ipsum odio quos.",
//   },
//   {
//     _key: "1",
//     title: "Smart Automation",
//     description: null
//   },
//   {
//     _key: "2",
//     title: "Top-notch Security",
//     description: null
//   },
// ];

// export const collabApps = [
//   {
//     _key: "0",
//     title: "Figma",
//     icon: "/images/collaboration/figma.png",
//     width: 26,
//     height: 36,
//   },
//   {
//     _key: "1",
//     title: "Notion",
//     icon: "/images/collaboration/notion.png",
//     width: 34,
//     height: 36,
//   },
//   {
//     _key: "2",
//     title: "Discord",
//     icon: "/images/collaboration/discord.png",
//     width: 36,
//     height: 28,
//   },
//   {
//     _key: "3",
//     title: "Slack",
//     icon: "/images/collaboration/slack.png",
//     width: 34,
//     height: 35,
//   },
//   {
//     _key: "4",
//     title: "Photoshop",
//     icon: "/images/collaboration/photoshop.png",
//     width: 34,
//     height: 34,
//   },
//   {
//     _key: "5",
//     title: "Protopie",
//     icon: "/images/collaboration/protopie.png",
//     width: 34,
//     height: 34,
//   },
//   {
//     _key: "6",
//     title: "Framer",
//     icon: "/images/collaboration/framer.png",
//     width: 26,
//     height: 34,
//   },
//   {
//     _key: "7",
//     title: "Raindrop",
//     icon: "/images/collaboration/raindrop.png",
//     width: 38,
//     height: 32,
//   },
// ];

type CheckItem = {
  _key?: string;
  text: string;
  description?: string;
}

type IconItem = {
  _key?: string;
  icon?: string | null;
  width?: number;
  height?: number;
  alt?: string;
}

export type CollaborationProps = {
  heading?: string;
  collabText?: string;
  btnText?: string;
  btnLink?: string;
  centerImage?: string;
  collabContent: CheckItem[];
  collabApps: IconItem[];
}

export default function Collaboration({collabText, heading, btnText, btnLink, centerImage, collabContent, collabApps}: CollaborationProps) {
  return (
    <>
      <Section crosses>
        <div className="container lg:flex">
          <div className="max-w-[25rem]">
            <h2 className="h2 mb-4 md:mb-8">
              {heading || "Section Title"}
            </h2>

            {collabContent && (
              <ul className="mb-10 max-w-[22rem] md:mb-14">
                {collabContent.map((item: CheckItem) => (
                  <CheckTextRow text={item.text} description={item.description} key={item._key} />
                ))}
              </ul>
            )}


            <Button as="a" href={btnLink}>{btnText}</Button>
          </div>

          <div className="mt-4 lg:ml-auto xl:w-[38rem]">
            <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mx-auto lg:mb-32 lg:w-[22rem]">
              {collabText || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad minus quibusdam voluptatem nisi sapiente mollitia illum ipsum odio quos."}
            </p>

            <div className="scale:75 relative left-1/2 flex aspect-square w-[22rem] -translate-x-1/2 rounded-full border border-n-6 md:scale-100">
              <div className="m-auto flex aspect-square w-60 rounded-full border border-n-6">
                <div className="m-auto aspect-square w-[6rem] rounded-full bg-conic-gradient p-[0.2rem]">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-n-8">
                    <Image
                      src={centerImage || "/images/collaboration/figma.png"}
                      // src="/images/brainwave-symbol.svg"
                      width={48}
                      height={48}
                      alt="brainwave"
                    />
                  </div>
                </div>
              </div>

              {collabApps && (
                <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app._key}
                    className={`absolute left-1/2 top-0 -ml-[1.6rem] h-1/2 origin-bottom rotate-${
                      index * 45
                    }`}
                  >
                    <div
                      className={`relative -top-[1.6rem] flex h-[3.2rem] w-[3.2rem] rounded-xl border border-n-1/15 bg-n-7 -rotate-${
                        index * 45
                      }`}
                    >
                      <Image
                        className="m-auto"
                        width={app.width || 34}
                        height={app.height || 34}
                        alt={app.alt  || "App Icon"}
                        src={app.icon || "/images/collaboration/figma.png"}
                      />
                    </div>
                  </li>
                ))}
              </ul>
              )}

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
