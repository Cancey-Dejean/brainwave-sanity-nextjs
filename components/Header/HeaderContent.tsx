'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button, NavLink } from "..";
import { HeaderProps } from ".";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { HamburgerMenu } from "../design/Header";
import { MenuSvg } from "../svg";

export default function HeaderContent({logoImage, menu, ctaButtonText, ctaButtonUrl, ctaLinkText, ctaLinkUrl}: HeaderProps) {
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
    };
    return (
        <div className={`sticky left-0 top-0 z-50 w-full border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm ${openNavigation ? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm"}`}>
            <div className="flex items-center px-5 max-lg:py-4 lg:px-7.5 xl:px-10">
                <Link className="w-[12rem]" href="#hero">
                    <Image src={logoImage || "/images/brainwave.svg"} width={190} height={40} alt={"Brainwave"}
                    />
                </Link>

                <nav
                    className={`${
                    openNavigation ? "flex" : "hidden"
                    } fixed bottom-0 left-0 right-0 top-[5rem] bg-n-8 lg:static lg:mx-auto lg:flex lg:bg-transparent`}
                >
                    <div className="relative z-2 m-auto flex flex-col items-center justify-center lg:flex-row">
                        {menu && menu.map((item) => (
                            <NavLink {...item} handleClick={handleClick} />
                        ))}
                    </div>

                    <HamburgerMenu />
                </nav>

                <div className="lg:flex hidden items-center gap-8">
                    {ctaLinkText && <NavLink className="!px-0" label={ctaLinkText} url={ctaLinkUrl || "/"} />}


                    <Button as="a" href={ctaButtonUrl || "/"}>
                        {ctaButtonText}
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
    )
}
