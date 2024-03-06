"use client";
import { useRef } from "react";
import Section from "../Section";
import { BackgroundCircles, BottomLine, Gradient } from "../design/Hero";
import { ScrollParallax } from "react-just-parallax";
import Generating from "../Generating";
import Notification from "../Notification";
import CompanyLogos from "../CompanyLogos";
import Image from "next/image";
import { Button } from "..";
import { urlFor } from "@/libs/sanity";
import Link from "next/link";

const heroIcons = [
  {
    image: "/images/home-smile.svg",
    alt: "home smile",
  },
  {
    image: "/images/file-02.svg",
    alt: "file02",
  },
  {
    image: "/images/search-md.svg",
    alt: "searchMd",
  },
  {
    image: "/images/plus-square.svg",
    alt: "plusSquare",
  },
];

// const companyLogos = [
//   {
//     image: "/images/yourlogo.svg",
//     alt: "Your Logo",
//     url: "/",
//   },
//   {
//     image: "/images/yourlogo.svg",
//     alt: "Your Logo",
//     url: "/",
//   },
//   {
//     image: "/images/yourlogo.svg",
//     alt: "Your Logo",
//     url: "/",
//   },
//   {
//     image: "/images/yourlogo.svg",
//     alt: "Your Logo",
//     url: "/",
//   },
//   {
//     image: "/images/yourlogo.svg",
//     alt: "Your Logo",
//     url: "/",
//   },
// ];

const notificationImages = [
  {
    image: "/images/notification/image-4.png",
    alt: "notification image",
  },
  {
    image: "/images/notification/image-3.png",
    alt: "notification image",
  },
  {
    image: "/images/notification/image-2.png",
    alt: "notification image",
  },
];

type Logo = {
  _key?: string;
  image: string;
  title: string;
  alt?: string;
  iconUrl: string;
  url?: string;
}

type HeroProps = {
  title: string;
  titleHighlight?: string;
  mainImage: string;
  mainImageAlt: string;
  imageText?: string;
  description?: string;
  btnText?: string;
  btnLink?: string;
  socialProofText?: string;
  companyLogos?: Logo[];
};

const Hero = ({
  title,
  titleHighlight = "Highlight",
  mainImage,
  mainImageAlt,
  imageText,
  description,
  btnText,
  btnLink,
  socialProofText,
  companyLogos,
}: HeroProps) => {
  const parallaxRef = useRef(null);

  return (
    <Section
      className="-mt-[5.25rem] pt-[12rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      id="hero"
    >
      <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 mx-auto mb-[3.875rem] flex max-w-[62rem] flex-col items-center justify-center text-center md:mb-20 lg:mb-[6.25rem]">
          <h1 className="h1 mb-6">
            {title || "Section Title"}

            {titleHighlight && (
              <span className="relative ml-4 inline-block">
                {titleHighlight}
                <Image
                  src="/images/hero/curve.png"
                  className="absolute left-0 top-full w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            )}
          </h1>

          <p className="body-1 mx-auto mb-6 max-w-3xl text-n-2 lg:mb-8">
            {description ||
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit, dolore."}
          </p>

          <Button as="a" href={btnLink} white>{btnText}</Button>
        </div>

        <div className="relative mx-auto max-w-[23rem] md:max-w-5xl xl:mb-24">
          <div className="relative z-1 rounded-2xl bg-conic-gradient p-0.5">
            <div className="relative rounded-[1rem] bg-n-8">
              <div className="h-[1.4rem] rounded-t-[0.9rem] bg-n-10" />

              <div className="aspect-[33/40] overflow-hidden rounded-b-[0.9rem] md:aspect-[688/490] lg:aspect-[1024/490]">
                <Image
                  src={mainImage || "https://dummyimage.com/1024x1512.png/ac6aff/ffffff"}

                  className="h-full w-full object-cover md:scale-[1.1] "
                  width={1034}
                  height={1512}
                  alt={mainImageAlt || "Main Image"}
                />

                {imageText && (
                  <Generating text={imageText || "Text goes here"} className="absolute bottom-5 left-4 right-4 md:bottom-8 md:left-1/2 md:right-auto md:w-[31rem] md:-translate-x-1/2" />
                )}

                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="absolute -left-[5.5rem] bottom-[7.5rem] hidden rounded-2xl border border-n-1/10 bg-n-9/40 px-1 py-1 backdrop-blur xl:flex">
                    {heroIcons.map((icon, index) => (
                      <li className="p-5" key={index}>
                        <Image
                          src={icon.image}
                          width={24}
                          height={25}
                          alt={icon.alt}
                        />
                      </li>
                    ))}
                  </ul>
                </ScrollParallax>

                <ScrollParallax isAbsolutelyPositioned>
                  <Notification
                    notificationImages={notificationImages}
                    className="absolute -right-[5.5rem] bottom-[11rem] hidden w-[18rem] xl:flex"
                    title="Code generation"
                  />
                </ScrollParallax>
              </div>
            </div>

            <Gradient />
          </div>

          <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
            <Image
              src={"/images/hero/hero-background.jpg"}
              className="w-full"
              width={1440}
              height={1800}
              alt="hero"
            />
          </div>

          <BackgroundCircles parallaxRef={parallaxRef} />
        </div>

        {companyLogos && (
          <CompanyLogos text={socialProofText} className="relative z-10 mt-20 hidden lg:block">
          {companyLogos.map((company) => (
            <li className="flex h-[8.5rem] flex-1 items-center justify-center" key={company._key}>

              {company.url !== null ? (
                <Link href={company.url || ""}>
                <span className="sr-only">{company.title}</span>
                <Image src={company.iconUrl} width={134} height={28} alt={company.alt || "Company Logo"} />
              </Link>
              ) : (
                <>
                <span className="sr-only">{company.title}</span>
                <Image src={company.iconUrl} width={134} height={28} alt={company.title} />
              </>
              )}

            </li>
          ))}
        </CompanyLogos>
        )}
      </div>

      <BottomLine />
    </Section>
  );
};

export default Hero;
