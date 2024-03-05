"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import MenuSvg from "../svg/MenuSvg";
import { HamburgerMenu } from "../design/Header";
// import { Button } from "../Button";
import NavLink from "../NavLink";
import { Button } from "..";

export const navigation = [
  {
    id: "0",
    label: "Features",
    url: "#features",
  },
  {
    id: "1",
    label: "Pricing",
    url: "#pricing",
  },
  {
    id: "2",
    label: "How to use",
    url: "#how-to-use",
  },
  {
    id: "3",
    label: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    label: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    label: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

type HeaderProps = {
  logoImage?: string;
  logoAlt?: string;
  logoText?: string;
};

export default function Header({logoImage, logoAlt, logoText}: HeaderProps) {
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
    alert("You clicked a link!");
  };

  return (
    <div
      className={`sticky left-0 top-0 z-50 w-full  border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${
        openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"
      }`}
    >
      <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
        <Link className="w-[12rem] xl:mr-8" href="#hero">
          {logoImage ? (
            <Image
            src={logoImage || "/images/brainwave.svg"}
            width={190}
            height={40}
            alt={logoAlt || "Brainwave"}
          />
          ) : (
            <p>{logoText || "Brainwave"}</p>
          )}

        </Link>

        <nav
          className={`${
            openNavigation ? "flex" : "hidden"
          } fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
        >
          <div className="relative z-2 m-auto flex flex-col items-center justify-center gap-6 lg:flex-row">
            {navigation.map((item) => (
              <NavLink label={item.label} url={item.url} key={item.id} onlyMobile={item.onlyMobile} handleClick={handleClick} />
            ))}
          </div>

          <HamburgerMenu />
        </nav>

        <div className="lg:flex hidden items-center gap-8">
          {/* <Link
            href="#signup"
            className="button text-n-1/50 transition-colors hover:text-n-1"
          >
            New account
          </Link> */}

          <NavLink label="New account" url="#login" />

          <Button as="a" href="#login">
            Sign in
          </Button>
        </div>

        <Button
          as="button"
          className="ml-auto lg:hidden"
          px="px-3"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
}
