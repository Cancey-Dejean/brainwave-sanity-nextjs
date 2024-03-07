// import { benefits } from "../../constants";

// import Section from "../Section";
import Arrow from "../svg/Arrow";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../svg/ClipPath";
import { Section, Heading, GradientCard } from "../../components";
import Image from "next/image";
import { GradientCardProps } from "../GradientCard";

// export const benefits = [
//   {

//     variant: "v1",
//     title: "Ask anything",
//     description:
//       "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     iconUrl: "/images/benefits/icon-1.svg",
//     backgroundImage: "/images/benefits/image-2.png",
//     btnUrl: "/",
//   },
//   {
//     variant: "v2",
//     title: "Improve everyday",
//     description:
//       "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     iconUrl: "/images/benefits/icon-2.svg",
//     backgroundImage: "/images/benefits/image-2.png",
//     gradientLight: true,
//     btnUrl: "/",
//   },
//   {
//     variant: "v3",
//     title: "Connect everywhere",
//     description:
//       "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
//     iconUrl: "/images/benefits/icon-3.svg",
//     backgroundImage: "/images/benefits/image-2.png",
//     btnUrl: "/",
//   },
//   {
//     variant: "v4",
//     title: "Fast responding",
//     description:
//       "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     iconUrl: "/images/benefits/icon-4.svg",
//     backgroundImage: "/images/benefits/image-2.png",
//     gradientLight: true,
//     btnUrl: "/",
//   },
//   {
//     variant: "v5",
//     title: "Ask anything",
//     description:
//       "Lets users quickly find answers to their questions without having to search through multiple sources.",
//     iconUrl: "/images/benefits/icon-1.svg",
//     backgroundImage: "/images/benefits/image-2.png",
//     btnUrl: "/",
//   },
//   {
//     variant: "v6",
//     title: "Improve everyday",
//     description:
//       "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
//     iconUrl: "/images/benefits/icon-2.svg",
//     backgroundImage: "/images/benefits/image-2.png",
//     btnUrl: "/",
//   },
// ];

type BenefitsProps = {
  heading: string;
  cards?: GradientCardProps[]
};

const Benefits = ({ heading, cards }: BenefitsProps) => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={heading || "Section Title"}
        />

      {cards && (
        <div className="mb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((benefit) => (
            <GradientCard
              variant={benefit.variant}
              title={benefit.title}
              description={benefit.description}
              gradientLight={benefit.gradientLight}
              iconUrl={benefit.iconUrl}
              btnUrl={benefit.btnUrl}
              key={benefit._key}
              backgroundImage={benefit.backgroundImage}
            />
          ))}
        </div>
      )}

      </div>
    </Section>
  );
};

export default Benefits;
