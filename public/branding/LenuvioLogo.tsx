import { LogoIconProps } from '@/app/types/logoiconprops';

export const LenuvioLogo: React.FC<LogoIconProps> = ({
  size = 168,
  className,
  ...props
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 168 168'
      fill='none'
      className={className}
      {...props}
      xmlns='http://www.w3.org/2000/svg'>
      <path d='M43 28H75V108L43 140V28Z' fill='#5C33A6' />
      <mask
        id='mask0_3_3'
        maskUnits='userSpaceOnUse'
        x='43'
        y='108'
        width='82'
        height='32'>
        <rect x='97' y='108' width='28' height='32' fill='#D9D9D9' />
        <path d='M80 108H92V140H80V108Z' fill='#D9D9D9' />
        <path d='M75 140L43 140L75 108L75 140Z' fill='#DEDEDE' />
      </mask>
      <g mask='url(#mask0_3_3)'>
        <path d='M75 108H125V140H43L75 108Z' fill='url(#paint0_linear_3_3)' />
      </g>
      <defs>
        <linearGradient
          id='paint0_linear_3_3'
          x1='39'
          y1='142.5'
          x2='108.5'
          y2='116.5'
          gradientUnits='userSpaceOnUse'>
          <stop stopColor='#00E6FF' />
          <stop offset='0.312088' stopColor='#15B2FF' />
          <stop offset='1' stopColor='#5C33A6' />
        </linearGradient>
      </defs>
    </svg>
  );
};
