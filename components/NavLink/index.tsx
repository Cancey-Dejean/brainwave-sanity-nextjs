import Link from "next/link";

type NavLinkProps = {
  id?: string;
  url: string;
  label: string;
  className?: string;
  onlyMobile?: boolean;
  handleClick?: () => void;
};

export default function NavLink({ id, label, url, className, onlyMobile, handleClick}: NavLinkProps) {
  return (
    <Link
        key={id}
        href={url}
        className={`relative block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 lg:text-n-1/50 ${
            onlyMobile ? "lg:hidden" : ""
        } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold lg:leading-5 lg:hover:text-n-1 ${className || ""}`}
        onClick={handleClick}

        >
        {label || "Link"}
    </Link>
  )
}
