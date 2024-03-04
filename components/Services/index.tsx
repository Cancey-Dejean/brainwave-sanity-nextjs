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
import { ServiceCardLarge } from "..";
import { ServiceCardLargeProps } from "./ServiceCardLarge";

// export const brainwaveServices = [
//   "Photo generating",
//   "Photo enhance",
//   "Seamless Integration",
// ];



export const brainwaveServicesIcons = [
  {
    id: "0",
    icon: "/images/recording-03.svg",
    alt: "Recording 03",
  },
  {
    id: "1",
    icon: "/images/recording-01.svg",
    alt: "Recording 01",
  },
  {
    id: "2",
    icon: "/images/disc-02.svg",
    alt: "Disc 02",
  },
  {
    id: "3",
    icon: "/images/chrome-cast.svg",
    alt: "chromecast",
  },
  {
    id: "4",
    icon: "/images/sliders-04.svg",
    alt: "Sliders 04",
  },
];

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
            <div className="relative min-h-[39rem] overflow-hidden rounded-3xl border border-n-1/10">
              <div className="absolute inset-0">
                <img
                  src={"/images/services/service-2.png"}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
                <h4 className="h4 mb-4">Photo editing</h4>
                <p className="body-2 mb-[3rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing feature. Try it now!
                </p>
              </div>

              <PhotoChatMessage />
            </div>

            {/* ServiceCard1 */}
            <div className="overflow-hidden rounded-3xl bg-n-7 p-4 lg:min-h-[46rem]">
              <div className="px-4 py-12 xl:px-8">
                <h4 className="h4 mb-4">Video generation</h4>
                <p className="body-2 mb-[2rem] text-n-3">
                  The world’s most powerful AI photo and video art generation
                  engine. What will you create?
                </p>

                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`flex items-center justify-center rounded-2xl ${
                        index === 2
                          ? "h-[3rem] w-[3rem] bg-conic-gradient p-0.25 md:h-[4.5rem] md:w-[4.5rem]"
                          : "flex h-10 w-10 bg-n-6 md:h-15 md:w-15"
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex h-full w-full items-center justify-center rounded-[1rem] bg-n-7"
                            : ""
                        }
                      >
                        <img
                          src={item.icon}
                          width={24}
                          height={24}
                          alt={item.alt}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative h-[20rem] overflow-hidden rounded-xl bg-n-8 md:h-[25rem]">
                <img
                  src={"/images/services/service-3.png"}
                  className="h-full w-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary robot"
                />

                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>

          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services;
