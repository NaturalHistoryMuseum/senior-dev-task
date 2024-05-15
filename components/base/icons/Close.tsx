interface ICloseIcon {
  className?: string;
  fill?: string;
  width?: string;
  height?: string;
}
const Close = ({
  className,
  fill = "currentColor",
  width = "17",
  height = "18",
}: ICloseIcon) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.390524 1.17312C0.911223 0.652418 1.75544 0.652418 2.27614 1.17312L12 10.897L21.7239 1.17312C22.2446 0.652418 23.0888 0.652418 23.6095 1.17312C24.1302 1.69382 24.1302 2.53804 23.6095 3.05874L13.8856 12.7826L23.6095 22.5065C24.1302 23.0272 24.1302 23.8714 23.6095 24.3921C23.0888 24.9128 22.2446 24.9128 21.7239 24.3921L12 14.6682L2.27614 24.3921C1.75544 24.9128 0.911223 24.9128 0.390524 24.3921C-0.130175 23.8714 -0.130175 23.0272 0.390524 22.5065L10.1144 12.7826L0.390524 3.05874C-0.130175 2.53804 -0.130175 1.69382 0.390524 1.17312Z"
      fill={fill}
    />
  </svg>
);

export default Close;
