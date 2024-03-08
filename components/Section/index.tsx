import SectionSvg from "../svg/SectionSvg";

type SectionProps = {
  className?: string;
  id?: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: string;
  children: React.ReactNode;
};
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: SectionProps) => {
  return (
    <div
      id={id}
      className={`
      relative
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "py-10 lg:py-32 xl:py-48" : ""}`
      }
      ${className || ""}`}
    >
      {children}

      <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:left-7.5 xl:left-10" />
      <div className="pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:right-7.5 xl:right-10" />

      {crosses && (
        <>
          <div
            className={`absolute left-7.5 right-7.5 top-0 hidden h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none right-10 lg:block xl:left-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
