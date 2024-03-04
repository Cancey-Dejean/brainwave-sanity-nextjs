import Image from "next/image";

type Logos = {
  image: string;
  alt: string;
};

type CompanyLogosProps = {
  className?: string;
  companyLogos: Logos[];
};

const CompanyLogos = ({ className, companyLogos }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex h-[8.5rem] flex-1 items-center justify-center"
            key={index}
          >
            <Image src={logo.image} width={134} height={28} alt={logo.alt} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
