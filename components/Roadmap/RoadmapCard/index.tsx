import TagLine from "../../../components/Tagline";
import Image from "next/image";

type RoadmapCardProps = {
  colorful?: boolean;
  date?: string;
  status?: "done" | "in progress" | string
  mainImage?: string;
  mainImageAlt?: string;
  title?: string;
  description?: string;
}

export default function RoadmapCard({ colorful, date, mainImage, mainImageAlt, title, description, status }: RoadmapCardProps) {
  return (
    <div className={`rounded-[2.5rem] max-w-[630px] mx-auto p-0.25 md:flex even:md:translate-y-[7rem] ${colorful ? "bg-conic-gradient" : "bg-n-6"}`}>
      <div className="relative overflow-hidden rounded-[2.4375rem] bg-n-8 p-8 xl:p-15">
        <div className="absolute left-0 top-0 max-w-full">
          <Image
            className="w-full"
            src="/images/grid.png"
            width={550}
            height={550}
            alt="Grid"
          />
        </div>

        <div className="relative z-1">
          <div className="mb-8 flex max-w-[27rem] items-center  justify-between md:mb-20">
            <TagLine>{date}</TagLine>

            <div className="flex items-center rounded bg-n-1 px-4 py-1 text-n-8">
              <Image
                className="mr-2.5"
                src={
                  status === "done"
                    ? "/images/check-02.svg"
                    : "/images/loading-01.svg"
                }
                width={16}
                height={16}
                alt={status}
              />
              <div className="tagline">{status}</div>
            </div>
          </div>

          <div className="-mx-15 -my-10 mb-10">
            <Image
              className="w-full"
              src={mainImage || "/images/roadmap/image-1.png"}
              width={628}
              height={426}
              alt={mainImageAlt || "Image"}
            />
          </div>
          <h4 className="h4 mb-4">{title || "Title"}</h4>
          <p className="body-2 text-n-4">{description || "Description goes here"}</p>
        </div>
      </div>
    </div>
  )
}
