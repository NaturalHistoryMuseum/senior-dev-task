interface IChevronIcon {
  className?: string;
  direction: "right" | "left" | "up" | "down";
  fill?: string;
  width?: string;
  height?: string;
}

const ChevronIcon = ({
  className,
  direction,
  width = "24px",
  height = "14px",
  fill = "currentColor",
}: IChevronIcon) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`transform ${
      direction === "right"
        ? "-rotate-90"
        : direction === "left"
        ? "rotate-90"
        : direction === "up"
        ? "rotate-180"
        : direction === "down"
        ? "rotate-0"
        : ""
    } translate-x-0 translate-y-0 skew-x-0 skew-y-0 scale-x-1 scale-y-1 ${className}`}
    aria-label="chevron icon"
  >
    <path
      d="M23.6095 0.390524C23.0888 -0.130175 22.2446 -0.130175 21.7239 0.390524L12 10.1144L2.27614 0.390524C1.75544 -0.130175 0.911224 -0.130175 0.390522 0.390524C-0.130177 0.911223 -0.130177 1.75544 0.390522 2.27614L11.0572 12.9428C11.5779 13.4635 12.4221 13.4635 12.9428 12.9428L23.6095 2.27614C24.1302 1.75544 24.1302 0.911223 23.6095 0.390524Z"
      fill={fill}
      stroke={fill}
    />
  </svg>
);

export default ChevronIcon;
