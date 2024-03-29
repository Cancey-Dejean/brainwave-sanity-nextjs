import { PhotoChatMessage } from "../../../components/design/Services";
import Image from "next/image";

type ServiceCard1Props = {
    mainImage?: string;
    mainImageAlt?: string;
    title?: string;
    description?: string;
    chatMessage?: string;
};

export default function ServiceCard1({mainImage, mainImageAlt, title, description, chatMessage}: ServiceCard1Props) {
  return (
    <div className="relative min-h-[39rem] overflow-hidden rounded-3xl max-w-[630px] mx-auto w-full border border-n-1/10">
        <Image src={mainImage || "https://dummyimage.com/630x750.png/ac6aff/ffffff"} className="h-full w-full object-cover" width={630} height={750} alt={mainImageAlt || "Image"}
        />

        <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-b from-n-8/0 to-n-8/90 p-8 lg:p-15">
            <h3 className="h4 mb-4">{title || "Section Title"}</h3>

            <p className="body-2 mb-[3rem] text-n-3">
                {description || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, rerum!"}
            </p>
        </div>

        {chatMessage && <PhotoChatMessage text={chatMessage} />}
    </div>
  )
}
