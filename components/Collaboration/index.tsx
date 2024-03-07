import { Button } from "..";
import { brainwaveSymbol, check } from "../../public/images";
// import { collabApps, collabContent, collabText } from "../../constants";
// import Button from "../Button";
import Section from "../Section";
import { LeftCurve, RightCurve } from "../design/Collaboration";
import Image from "next/image";


export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ad minus quibusdam voluptatem nisi sapiente mollitia illum ipsum odio quos.",
  },
  {
    id: "1",
    title: "Smart Automation",
    text: null
  },
  {
    id: "2",
    title: "Top-notch Security",
    text: null
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: "/images/collaboration/figma.png",
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: "/images/collaboration/notion.png",
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: "/images/collaboration/discord.png",
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: "/images/collaboration/slack.png",
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: "/images/collaboration/photoshop.png",
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: "/images/collaboration/protopie.png",
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: "/images/collaboration/framer.png",
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: "/images/collaboration/raindrop.png",
    width: 38,
    height: 32,
  },
];

type CollaborationProps = {
  heading?: string;
  collabText?: string;
  btnText?: string;
  btnLink?: string;
}

export default function Collaboration({collabText, heading, btnText, btnLink}: CollaborationProps) {
  return (
    <>
      <Section crosses>
        <div className="container lg:flex">
          <div className="max-w-[25rem]">
            <h2 className="h2 mb-4 md:mb-8">
              {heading || "Section Title"}
            </h2>

            <ul className="mb-10 max-w-[22rem] md:mb-14">
              {collabContent.map((item) => (
                <li className="mb-3 py-3" key={item.id}>
                  <div className="flex items-center">
                    <Image
                      src="/images/check.svg"
                      width={24}
                      height={24}
                      alt="check"
                    />
                    <h6 className="body-2 ml-5">{item.title}</h6>
                  </div>
                  {item.text && (
                    <p className="body-2 mt-3 text-n-4">{item.text}</p>
                  )}
                </li>
              ))}
            </ul>

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
                      src="/images/brainwave-symbol.svg"
                      width={48}
                      height={48}
                      alt="brainwave"
                    />
                  </div>
                </div>
              </div>

              <ul>
                {collabApps.map((app, index) => (
                  <li
                    key={app.id}
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
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                        src={app.icon}
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <LeftCurve />
              <RightCurve />
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
