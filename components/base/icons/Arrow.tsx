interface IArrowIcon {
  className?: string;
  direction: "right" | "left" | "up" | "down";
  fill?: string;
  width?: string;
  height?: string;
}

const rotation = {
  right: 0,
  left: 180,
  up: 90,
  down: 270,
};

const ArrowIcon = ({
  className,
  direction,
  width = "24px",
  height = "19px",
  fill = "currentColor",
}: IArrowIcon) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{
      transform: `rotate(${rotation[direction]}deg)`,
    }}
    aria-label={`arrow icon ${direction}`}
  >
    <path
      d="M23.6805 10.1292C24.1065 9.72165 24.1065 9.06096 23.6805 8.65345L14.9532 0.305626C14.5272 -0.101877 13.8365 -0.101877 13.4104 0.305626C12.9844 0.713131 12.9844 1.37382 13.4104 1.78133L20.2754 8.34783L1.09091 8.34783C0.488417 8.34783 0 8.81501 0 9.3913C0 9.9676 0.488417 10.4348 1.09091 10.4348L20.2754 10.4348L13.4104 17.0013C12.9844 17.4088 12.9844 18.0695 13.4104 18.477C13.8365 18.8845 14.5272 18.8845 14.9532 18.477L23.6805 10.1292Z"
      fill={fill}
    />
  </svg>
);

export default ArrowIcon;
