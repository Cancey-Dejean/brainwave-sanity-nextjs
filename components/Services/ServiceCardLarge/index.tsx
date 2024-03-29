import Generating from '../../../components/Generating';
import Image from 'next/image'


export type ServiceCardLargeProps = {
    mainImage?: string;
    mainImageAlt?: string;
    title?: string;
    description?: string;
    bottomText?: string;
    children?: React.ReactNode;
}

export default function ServiceCardLarge({mainImage, mainImageAlt, title, description, bottomText, children}: ServiceCardLargeProps) {
  return (
    <div className="relative z-1 mb-5 flex h-[39rem] items-center overflow-hidden rounded-3xl border border-n-1/10 p-8 lg:p-20 xl:h-[46rem] max-w-[1280px] mx-auto w-full">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full md:w-3/5 xl:w-auto">
          <Image
            className="h-full w-full object-cover md:object-right"
            width={800}
            alt={mainImageAlt || "Alt Text"}
            height={730}
            src={ mainImage || "https://dummyimage.com/800x730.png/ac6aff/ffffff"}
          />
        </div>

        <div className="relative z-1 ml-auto max-w-[17rem]">
            <h4 className="h4 mb-4">{title || "Title"}</h4>

            {description && (
              <p className="body-2 mb-[3rem] text-n-3">
                  {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus officia quo non."}
              </p>
            )}

            <ul className="body-2">
                {children}
            </ul>
        </div>


        {bottomText && (
          <Generating text={bottomText} className="lg-right-auto absolute bottom-4 left-4 right-4 border border-n-1/10 lg:bottom-8 lg:left-1/2 lg:-translate-x-1/2" />
        )}
    </div>
  )
}
