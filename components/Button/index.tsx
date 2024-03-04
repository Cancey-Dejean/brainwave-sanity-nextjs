import ButtonGradient from "../Button/ButtonGradient";

export type ButtonProps = {
  as: "a" | "button";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
  px?: string;
  white?: boolean;
  href?: string;
} & React.HTMLAttributes<HTMLButtonElement> &
  React.HTMLAttributes<HTMLAnchorElement>;

export const Button = ({
  as,
  className,
  onClick,
  children,
  href,
  px,
  white = false,
  ...rest
}: ButtonProps) => {
  const Element = as;
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 px-7 ${
    white ? "text-n-8" : "text-n-1"
  } ${className || ""}`;
  const spanClasses = "relative z-10";

  return (
    <Element className={classes} {...rest}>
      <span className={spanClasses}>{children || "Button"}</span>
      {ButtonSvg({ white: white })}
    </Element>
  );
};

const ButtonSvg = ({ white = false }: { white: boolean }) => {
  return (
    <>
      <ButtonGradient />

      {/* White */}
      <svg
        className="absolute left-0 top-0"
        width="21"
        height="44"
        viewBox="0 0 21 44"
      >
        <path
          fill={white ? "white" : "none"}
          stroke={white ? "white" : "url(#btn-left)"}
          strokeWidth="2"
          d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
        />
      </svg>
      <svg
        className="absolute left-[1.3125rem] top-0 w-[calc(100%-2.625rem)]"
        height="44"
        viewBox="0 0 100 44"
        preserveAspectRatio="none"
        fill={white ? "white" : "none"}
      >
        {white ? (
          <polygon
            fill="white"
            fillRule="nonzero"
            points="100 0 100 44 0 44 0 0"
          />
        ) : (
          <>
            <polygon
              fill="url(#btn-top)"
              fillRule="nonzero"
              points="100 42 100 44 0 44 0 42"
            />
            <polygon
              fill="url(#btn-bottom)"
              fillRule="nonzero"
              points="100 0 100 2 0 2 0 0"
            />
          </>
        )}
      </svg>
      <svg
        className="absolute right-[1px] top-0"
        width="21"
        height="44"
        viewBox="0 0 21 44"
      >
        <path
          fill={white ? "white" : "none"}
          stroke={white ? "white" : "url(#btn-right)"}
          strokeWidth="2"
          d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
        />
      </svg>
    </>
  );
};
