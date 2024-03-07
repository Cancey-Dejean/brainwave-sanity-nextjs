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
import CheckTextRow, { CheckTextRowProps } from "../CheckTextRow";

// export const brainwaveServices = [
//   "Photo generating",
//   "Photo enhance",
//   "Seamless Integration",
// ];

// const data = [
//   {
//     id: "0",
//     text: "Photo generating",
//   },
//   {
//     id: "1",
//     text: "Photo enhance",
//   },
//   {
//     id: "2",
//     text: "Seamless Integration",
//   }
// ];


type ServicesProps = {
  heading: string;
  description?: string;
  featuredCardImage?: string;
  featuredCardTitle?: string;
  featuredCardDesc?: string;
  featuredCardItemList: CheckTextRowProps[];
  serviceCard1Image?: string;
  serviceCard1Title?: string;
  serviceCard1Desc?: string;
  serviceCard1ChatMessage?: string;
  serviceCard2Image?: string;
  serviceCard2Title?: string;
  serviceCard2Desc?: string;
  serviceCard2ChatMessage?: string;

} & ServiceCardLargeProps;

const Services = ({heading, description, featuredCardTitle, featuredCardDesc, featuredCardItemList, featuredCardImage, serviceCard1Image, serviceCard1Title, serviceCard1Desc, serviceCard1ChatMessage, serviceCard2Image, serviceCard2Title, serviceCard2Desc, serviceCard2ChatMessage}: ServicesProps) => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title={heading || "Section Title"}
          text={description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non."}
        />

        <div className="relative">
          {/* ServiceCardLarge */}
          {featuredCardItemList && (
            <>
              <ServiceCardLarge title={featuredCardTitle || "Featured"}
              description={featuredCardDesc || "Hello"}
              mainImage={featuredCardImage || ""}>
                {featuredCardItemList.map((item) => (
                   <CheckTextRow key={item._key} {...item} />
                ))}
              </ServiceCardLarge>
            </>
          )}

          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            {/* ServiceCard1 */}
            <ServiceCard1 title={serviceCard1Title} chatMessage={serviceCard1ChatMessage} description={serviceCard1Desc} mainImage={serviceCard1Image} mainImageAlt="Main Image" />

            {/* ServiceCard2 */}
            <ServiceCard2 mainImage={serviceCard2Image} mainImageAlt="Hello" title={serviceCard2Title} description={serviceCard2Desc}  videoChatMessage={serviceCard2ChatMessage} />

          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
