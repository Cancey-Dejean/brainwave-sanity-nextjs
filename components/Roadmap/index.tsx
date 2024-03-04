import Button from "../Button";
import Heading from "../Heading";
import Section from "../Section";
// import { roadmap } from "../../constants";
import { check2, grid, loading1 } from "../../public/images";
import { Gradient } from "../design/Roadmap";
import TagLine from "../Tagline";
import Image from "next/image";

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: "/images/roadmap/image-1.png",
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: "/images/roadmap/image-2.png",
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: "/images/roadmap/image-3.png",
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: "/images/roadmap/image-4.png",
  },
];

const Roadmap = () => (
 <>
 Roadmap
  {/* <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag="Ready to get started" title="What we’re working on" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`rounded-[2.5rem] p-0.25 md:flex even:md:translate-y-[7rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative overflow-hidden rounded-[2.4375rem] bg-n-8 p-8 xl:p-15">
                <div className="absolute left-0 top-0 max-w-full">
                  <img
                    className="w-full"
                    src="/images/grid.png"
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="mb-8 flex max-w-[27rem] items-center justify-between md:mb-20">
                    <TagLine>{item.date}</TagLine>

                    <div className="flex items-center rounded bg-n-1 px-4 py-1 text-n-8">
                      <Image
                        className="mr-2.5"
                        src={
                          item.status === "done"
                            ? "/images/check-02.svg"
                            : "/images/loading-01.svg"
                        }
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  <div className="-mx-15 -my-10 mb-10">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      width={628}
                      height={426}
                      alt={item.title}
                    />
                  </div>
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}

        <Gradient />
      </div>

      <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
        <Button href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section> */}
 </>
);

export default Roadmap;
