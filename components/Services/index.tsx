import Section from "../Section";
import Heading from "../Heading";
import { service1, service2, service3, check } from "../../public/images";
// import { brainwaveServices, brainwaveServicesIcons } from "../../constants";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "../design/Services";

import Generating from "../Generating";
import Image from "next/image";
import { ServiceCard1, ServiceCard2, ServiceCardLarge } from "..";
import { ServiceCardLargeProps } from "./ServiceCardLarge";

// export const brainwaveServices = [
//   "Photo generating",
//   "Photo enhance",
//   "Seamless Integration",
// ];




type ServicesProps = {
  title: string;
  description?: string;
} & ServiceCardLargeProps;

const Services = ({title, description}: ServicesProps) => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={title || "Section Title"}
          text={description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non."}
        />

        <div className="relative">
          {/* ServiceCardLarge */}
          <ServiceCardLarge title="Hello" mainImage="/images/services/service-1.png" />


          <div className="relative z-1 grid gap-5 lg:grid-cols-2">

            {/* ServiceCard1 */}
            <ServiceCard1 title="Section Title" chatMessage="Hello" description="Hello" mainImage="/images/services/service-2.png" mainImageAlt="Main Image" />

            {/* ServiceCard2 */}
            <ServiceCard2 mainImage="/images/services/service-3.png" mainImageAlt="Hello" title="Title" />

          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
