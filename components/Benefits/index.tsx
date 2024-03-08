import { Section, Heading, GradientCard } from "../../components";
import { GradientCardProps } from "../GradientCard";

type BenefitsProps = {
  heading?: string;
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
