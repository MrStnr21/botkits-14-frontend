import React, { FC } from 'react';

export interface IInvisibleMessageIcon {
  color?: string;
  width?: number;
  height?: number;
}

const InvisibleMessageIcon: FC<IInvisibleMessageIcon> = ({
  color,
  width = 20,
  height = 20,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1881_334900)">
      <path
        d="M10.0001 18.3337C14.6025 18.3337 18.3334 14.6027 18.3334 10.0003C18.3334 5.39795 14.6025 1.66699 10.0001 1.66699C5.39771 1.66699 1.66675 5.39795 1.66675 10.0003C1.66675 14.6027 5.39771 18.3337 10.0001 18.3337Z"
        stroke={color || '#A6B3C9'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.10834 4.1084L15.8917 15.8917"
        stroke={color || '#A6B3C9'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1881_334900">
        <rect width={width} height={height} fill={color || '#FFFFFF'} />
      </clipPath>
    </defs>
  </svg>
);

export default InvisibleMessageIcon;
