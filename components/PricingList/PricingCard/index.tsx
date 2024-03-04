import Image from 'next/image';
import { Button, CheckTextRow } from '../../../components'

export type PricingCardProps = {
  id?: string;
  title: string;
  description?: string;
  price?: string | null;
  children?: React.ReactNode;
    features?: {
        id: string;
        text: string;
    }[];
}

export default function PricingCard({
    title,
    description,
    price,
    children,
}: PricingCardProps) {
  return (
    <div className="h-full flex-1 w-[19rem] rounded-[2rem] border border-n-6 bg-n-8 px-6 odd:my-4 odd:py-8 even:py-14 max-lg:w-full lg:w-auto [&>h4]:first:text-color-2 [&>h4]:last:text-color-3 [&>h4]:even:text-color-1">
          <h4 className="h4 mb-4">{title}</h4>

          <p className="body-2 mb-3 min-h-[4rem] text-n-1/50">
            {description}
          </p>

          <div className="mb-6 flex h-[5.5rem] items-center">
            {price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] font-bold leading-none">
                  {price || "0"}
                </div>
              </>
            )}
          </div>

          <Button
            as="a"
            className="mb-6 w-full"
            href={price ? "/pricing" : "mailto:contact@jsmastery.pro"}
            white={!!price}
          >
            {price ? "Get started" : "Contact us"}
          </Button>


          <ul>
            {children}
          {/* {data?.map((feature) => (
              <CheckTextRow />
          ))} */}
          {/* {features && features.map((feature: string) => (
            <CheckTextRow text={title} key={feature.features.title} />
          ))} */}
            {/* {data && data.map((feature) => (
                <CheckTextRow text={data.features.text} key={feature.id} />
            ))} */}
          </ul>

        </div>
  )
}
