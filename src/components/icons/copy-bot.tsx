import React, { FC } from 'react';

interface ICopyBotIcon {
  color?: string;
  width?: number;
  height?: number;
}

const CopyBotIcon: FC<ICopyBotIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_248_30273)">
      <path
        d="M12.6631 18.3017C12.6631 19.029 12.1185 19.7564 11.2109 19.7564C10.4849 19.7564 9.75879 19.2109 9.75879 18.3017C9.75879 17.5743 10.3033 16.847 11.2109 16.847C11.937 16.847 12.6631 17.5743 12.6631 18.3017Z"
        fill={color || 'currentColor'}
      />
      <path
        d="M18.9004 18.3017C18.9004 19.029 18.3558 19.7564 17.4482 19.7564C16.7222 19.7564 15.9961 19.2109 15.9961 18.3017C15.9961 17.5743 16.5407 16.847 17.4482 16.847C18.1743 16.847 18.9004 17.5743 18.9004 18.3017Z"
        fill={color || 'currentColor'}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.9945 22.677H8.79577C7.27501 22.677 6.0415 21.5728 6.0415 20.2114V19.4929C6.0415 15.4012 9.75047 12.081 14.3212 12.081H14.4691C19.0398 12.081 22.7488 15.4012 22.7488 19.4929V20.2114C22.7488 21.5728 21.5153 22.677 19.9945 22.677Z"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M14.3973 9.83531C15.5198 9.83531 16.4299 8.9253 16.4299 7.80276C16.4299 6.68021 15.5198 5.7702 14.3973 5.7702C13.2748 5.7702 12.3647 6.68021 12.3647 7.80276C12.3647 8.9253 13.2748 9.83531 14.3973 9.83531Z"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M8.47591 5.29789C9.59846 5.29789 10.5085 4.38789 10.5085 3.26534C10.5085 2.14279 9.59846 1.23279 8.47591 1.23279C7.35337 1.23279 6.44336 2.14279 6.44336 3.26534C6.44336 4.38789 7.35337 5.29789 8.47591 5.29789Z"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M14.3975 9.21591V11.8778"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
      <path
        d="M12.8605 8.44475C11.7738 8.05517 11.4327 7.34837 8.67898 7.34839C5.23683 7.34842 1.40527 10.5656 1.40527 14.6573V15.3758C1.40527 16.7371 2.63878 17.8413 4.15954 17.8413C4.77919 17.8413 5.36027 17.8413 5.91371 17.8413"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeMiterlimit="10"
      />
      <path
        d="M8.47607 4.38025V7.0421"
        stroke={color || 'currentColor'}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_248_30273">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default CopyBotIcon;
