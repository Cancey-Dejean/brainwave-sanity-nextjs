import React from "react";
import { Arrow, ClipPath } from "../svg";
import { GradientLight } from "../design/Benefits";
import { cn } from "../../libs/utils";
import Image from "next/image";
import Link from "next/link";

export type GradientCardProps = {
  _key?: string;
  title?: string;
  description?: string;
  iconUrl?: string;
  iconAlt?: string;
  variant: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | string;
  backgroundImage?: string;
  gradientLight?: boolean;
  btnText?: string;
  btnUrl?: string;
};

export default function GradientCard({
  title,
  description,
  iconUrl,
  iconAlt,
  backgroundImage,
  variant,
  gradientLight,
  btnText,
  btnUrl,
}: GradientCardProps) {
  return (
    <div
      className={cn(
        "link-block group bg-[length:100%_100%] bg-no-repeat p-0.5 md:max-w-[24rem]",
        variant === "v1" ? "bg-v1" : "",
        variant === "v2" ? "bg-v2" : "",
        variant === "v3" ? "bg-v3" : "",
        variant === "v4" ? "bg-v4" : "",
        variant === "v5" ? "bg-v5" : "",
        variant === "v6" ? "bg-v6" : "",
      )}
    >
      <div className=" relative z-1 flex min-h-[22rem] flex-col p-[2.4rem]">
        <h5 className="h5 mb-5">{title}</h5>
        <p className="body-2 mb-6 text-n-3">{description}</p>
        <div className="mt-auto flex items-center">
          <Image src={iconUrl || "/images/benefits/icon-1.svg"} width={48} height={48} alt={iconAlt || "Alt Text"} />
          <p className="ml-auto font-code text-xs font-bold uppercase tracking-wider text-n-1">
            {btnText || "Explore more"}
          </p>
          {btnUrl !== "" ? (
            <Link href={btnUrl || "#"}>
              <Arrow />
            </Link>
          ) : (
            <Arrow />
          )}
        </div>
      </div>

      {gradientLight && <GradientLight />}

      <div
        className="absolute inset-0.5 bg-n-8"
        style={{ clipPath: "url(#benefits)" }}
      >
        <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-10">
          <Image
            src={backgroundImage || "/images/benefits/image-2.png"}
            width={380}
            height={362}
            alt={title || ""}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      <ClipPath />
    </div>
  );
}
