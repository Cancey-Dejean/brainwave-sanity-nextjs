import { urlFor } from "@/libs/sanity";
import Image from "next/image";
import Link from "next/link";

// type Logo = {
//   image: string;
//   alt: string;
//   url?: string;
// };

export type CompanyLogosProps = {
  className?: string;
  text?: string;
  // companyLogos: Logo[];
  children?: React.ReactNode;
};

const CompanyLogos = ({ className, children, text }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        {text || "Trusted by"}
      </h5>
      <ul className="flex">
        {children}
      </ul>
    </div>
  );
};

export default CompanyLogos;
