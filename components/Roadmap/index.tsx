
import Heading from "../Heading";
import Section from "../Section";
import { Gradient } from "../design/Roadmap";
import { Button, RoadmapCard } from "..";

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    description: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    mainImage: "/images/roadmap/image-1.png",
    mainImageAlt: "Voice recognition",
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    description: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    mainImage: "/images/roadmap/image-2.png",
    mainImageAlt: "Gamification",
    colorful: false,
  },
  {
    id: "2",
    title: "Chatbot customization",
    description: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    mainImage: "/images/roadmap/image-3.png",
    mainImageAlt: "Chatbot customization",
    colorful: false,
  },
  {
    id: "3",
    title: "Integration with APIs",
    description: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    mainImage: "/images/roadmap/image-4.png",
    mainImageAlt: "Integration with APIs",
    colorful: false,
  },
];

type RoadmapProps = {
  tag?: string;
  title: string;
};

const Roadmap = ({tag, title}: RoadmapProps) => (
  <Section className="overflow-hidden" id="roadmap">
    <div className="container md:pb-10">
      <Heading tag={tag || "Tag"} title={title || "Section Title"} />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
        {roadmap.map((item) => {
          return (
            <RoadmapCard mainImage={item.mainImage} title={item.title} description={item.description}  status={item.status} key={item.id} date={item.date} colorful={item.colorful} />
          );
        })}

        <Gradient />
      </div>

      <div className="mt-12 flex justify-center md:mt-15 xl:mt-20">
        <Button as="a" href="/roadmap">Our roadmap</Button>
      </div>
    </div>
  </Section>
);

export default Roadmap;
