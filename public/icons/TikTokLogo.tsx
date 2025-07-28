import { LogoIconProps } from '@/app/types/logoiconprops';

export const TikTokLogo: React.FC<LogoIconProps> = ({
  size = 32,
  className,
  ...props
}) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill='#000000'
      viewBox='0 0 24 24'
      className={className}
      {...props}>
      <rect x='3' y='3' width='18' height='18' rx='1' fill='white' />
      <path d='M21,2H3A1,1,0,0,0,2,3V21a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2Zm-3.281,8.725h0c-.109.011-.219.016-.328.017A3.571,3.571,0,0,1,14.4,9.129v5.493a4.061,4.061,0,1,1-4.06-4.06c.085,0,.167.008.251.013v2a2.067,2.067,0,1,0-.251,4.119A2.123,2.123,0,0,0,12.5,14.649l.02-9.331h1.914A3.564,3.564,0,0,0,17.719,8.5Z' />
    </svg>
  );
};
