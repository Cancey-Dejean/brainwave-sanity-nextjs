// import { check } from "../../public/images";
// import { pricing } from "../../constants";
import { Button } from "../../components";
import Image from "next/image";
// import Button from "./Button";

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "AI chatbot, personalized recommendations",
    price: "0",
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "9.99",
    features: [
      "An advanced AI chatbot that can understand complex queries",
      "An analytics dashboard to track your conversations",
      "Priority support to solve issues quickly",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Custom AI chatbot, advanced analytics, dedicated account",
    price: null,
    features: [
      "An AI chatbot that can understand your queries",
      "Personalized recommendations based on your preferences",
      "Ability to explore the app and its features without any cost",
    ],
  },
];

const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="h-full w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1"
        >
          <h4 className="h4 mb-4">{item.title}</h4>

          <p className="body-2 mb-3 min-h-[4rem] text-n-1/50">
            {item.description}
          </p>

          <div className="mb-6 flex h-[5.5rem] items-center">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] font-bold leading-none">
                  {item.price}
                </div>
              </>
            )}
          </div>

          <Button
            className="mb-6 w-full"
            href={item.price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start border-t border-n-6 py-5"
              >
                <Image
                  src="/images/check.svg"
                  width={24}
                  height={24}
                  alt="Check"
                />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
