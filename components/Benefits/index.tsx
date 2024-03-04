// import { benefits } from "../../constants";

// import Section from "../Section";
import Arrow from "../svg/Arrow";
import { GradientLight } from "../design/Benefits";
import ClipPath from "../svg/ClipPath";
import { Section, Heading, GradientCard } from "../../components";
import Image from "next/image";

export const benefits = [
  {
    id: "0",
    variant: "v1",
    title: "Ask anything",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    iconUrl: "/images/benefits/icon-1.svg",
    backgroundImage: "/images/benefits/image-2.png",
    btnUrl: "/",
  },
  {
    id: "1",
    variant: "v2",
    title: "Improve everyday",
    description:
      "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    iconUrl: "/images/benefits/icon-2.svg",
    backgroundImage: "/images/benefits/image-2.png",
    gradientLight: true,
    btnUrl: "/",
  },
  {
    id: "2",
    variant: "v3",
    title: "Connect everywhere",
    description:
      "Connect with the AI chatbot from anywhere, on any device, making it more accessible and convenient.",
    iconUrl: "/images/benefits/icon-3.svg",
    backgroundImage: "/images/benefits/image-2.png",
    btnUrl: "/",
  },
  {
    id: "3",
    variant: "v4",
    title: "Fast responding",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    iconUrl: "/images/benefits/icon-4.svg",
    backgroundImage: "/images/benefits/image-2.png",
    gradientLight: true,
    btnUrl: "/",
  },
  {
    id: "4",
    variant: "v5",
    title: "Ask anything",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    iconUrl: "/images/benefits/icon-1.svg",
    backgroundImage: "/images/benefits/image-2.png",
    btnUrl: "/",
  },
  {
    id: "5",
    variant: "v6",
    title: "Improve everyday",
    description:
      "The app uses natural language processing to understand user queries and provide accurate and relevant responses.",
    iconUrl: "/images/benefits/icon-2.svg",
    backgroundImage: "/images/benefits/image-2.png",
    btnUrl: "/",
  },
];

type BenefitsProps = {
  title: string;
};

const Benefits = ({ title }: BenefitsProps) => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title={title || "Section Title"}
        />

        <div className="mb-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <GradientCard
              variant={benefit.variant}
              title={benefit.title}
              description={benefit.description}
              gradientLight={benefit.gradientLight}
              iconUrl={benefit.iconUrl}
              btnUrl={benefit.btnUrl}
              key={benefit.id}
              backgroundImage={benefit.backgroundImage}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
