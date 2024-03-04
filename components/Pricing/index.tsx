// import Section from "./Section";
import { Heading, PricingList, Section } from "../../components";
import { smallSphere, stars } from "../../public/images";
import { LeftLine, RightLine } from "../design/Pricing";
import Image from "next/image";
// import Heading from "./Heading";
// import PricingList from "./PricingList";
// import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = () => {
  return (
    <>
    Pricing
    {/* <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        <div className="relative mb-[6.5rem] hidden justify-center lg:flex">
          <Image
            src="/images/4-small.png"
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
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
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            className="border-b font-code text-xs font-bold uppercase tracking-wider"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section> */}
    </>
  );
};

export default Pricing;
