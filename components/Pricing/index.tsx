import Link from "next/link";
import { CheckTextRow, Heading, PricingCard, PricingList, Section } from "../../components";
import { LeftLine, RightLine } from "../design/Pricing";
import Image from "next/image";


const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      {
          id: "0",
          text: "An AI chatbot that can understand your queries",
      },
      {
          id: "1",
          text: "Personalized recommendations based on your preferences",
      },
      {
          id: "2",
          text: "Ability to explore the app and its features without any cost",
      },
    ],
  },
  {
      id: "1",
      title: "Premium",
      description: "Advanced AI chatbot, priority support, analytics dashboard",
      price: "9.99",
      features: [
          {
              id: "0",
              text: "An advanced AI chatbot that can understand complex queries",
          },
          {
              id: "1",
              text: "An analytics dashboard to track your conversations",
          },
          {
              id: "2",
              text: "Priority support to solve issues quickly",
          },
      ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
        {
            id: "0",
            text: "An AI chatbot that can understand your queries",
        },
        {
            id: "1",
            text: "Personalized recommendations based on your preferences",
        },
        {
            id: "2",
            text: "Ability to explore the app and its features without any cost",
        },
    ],
},
];

type PricingProps = {
  title: string;
  tag?: string;
  linkText?: string;
  linkUrl?: string;
  mainImage: string;
  mainImageAlt: string;
};

const Pricing = ({tag, title, linkText, linkUrl, mainImage,  mainImageAlt}: PricingProps) => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <Image
            src={mainImage || "/images/4-small.png"}
            className="relative z-1"
            width={255}
            height={255}
            alt={mainImageAlt || "Sphere"}
          />
          <div className="pointer-events-none absolute left-1/2 top-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2">
            <Image
              src="/images/pricing/stars.svg"
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        <Heading
          tag={tag || "Tag"}
          title={title || "Title"}
        />

        <div className="relative">
          <PricingList>
            {pricing.map((item) => (
              <PricingCard price={item.price} title={item.title} key={item.id} description={item.description}>
                {item.features.map((feature) => (
                  <CheckTextRow text={feature.text} />
                ))}
              </PricingCard>
            ))}
          </PricingList>

          <LeftLine />
          <RightLine />
        </div>

        {linkText && (
          <div className="mt-10 flex justify-center">
            <Link
              className="border-b font-code text-xs font-bold uppercase tracking-wider"
              href={linkUrl || "#"}
            >
              {linkText || "Link Text"}
            </Link>
          </div>
        )}

      </div>
    </Section>
  );
};

export default Pricing;
