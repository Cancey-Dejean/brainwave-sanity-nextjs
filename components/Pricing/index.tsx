import Link from "next/link";
import { CheckTextRow, Heading, PricingCard, PricingList, Section } from "../../components";
import { LeftLine, RightLine } from "../design/Pricing";
import Image from "next/image";
import { PricingCardProps } from "../PricingList/PricingCard";


// const pricingCards = [
//   {
//     _key: "0",
//     title: "Basic",
//     description: "AI chatbot, personalized recommendations",
//     price: "0",
//     features: [
//       {
//         _key: "0",
//           text: "An AI chatbot that can understand your queries",
//       },
//       {
//         _key: "1",
//           text: "Personalized recommendations based on your preferences",
//       },
//       {
//         _key: "2",
//           text: "Ability to explore the app and its features without any cost",
//       },
//     ],
//   },
//   {
//       _key: "1",
//       title: "Premium",
//       description: "Advanced AI chatbot, priority support, analytics dashboard",
//       price: "9.99",
//       features: [
//           {
//               _key: "0",
//               text: "An advanced AI chatbot that can understand complex queries",
//           },
//           {
//               _key: "1",
//               text: "An analytics dashboard to track your conversations",
//           },
//           {
//               _key: "2",
//               text: "Priority support to solve issues quickly",
//           },
//       ],
//   },
//   {
//     _key: "2",
//     title: "Enterprise",
//     description: "Custom AI chatbot, advanced analytics, dedicated account",
//     price: null,
//     features: [
//         {
//             _key: "0",
//             text: "An AI chatbot that can understand your queries",
//         },
//         {
//             _key: "1",
//             text: "Personalized recommendations based on your preferences",
//         },
//         {
//             _key: "2",
//             text: "Ability to explore the app and its features without any cost",
//         },
//     ],
// },
// ];


type PricingProps = {
  heading?: string;
  tag?: string;
  linkText?: string;
  linkUrl?: string;
  mainImage: string;
  mainImageAlt: string;
  pricingCards: PricingCardProps[];
};

const Pricing = ({tag, heading, linkText, linkUrl, mainImage,  mainImageAlt, pricingCards}: PricingProps) => {
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <Image
            src={mainImage}
            className="relative z-1"
            width={255}
            height={255}
            alt={mainImageAlt}
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
          title={heading || "Title"}
        />

        {pricingCards && (
          <div className="relative">
          <PricingList>
            {pricingCards.map((item) => (
              <>
              <PricingCard price={item.price} title={item.title} key={item._key} description={item.description}>
                {item.features && item.features.map((feature) => (
                  <CheckTextRow text={feature.text} key={feature._key} />
                ))}
              </PricingCard>
              </>
            ))}
          </PricingList>

          <LeftLine />
          <RightLine />
        </div>
)}


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
