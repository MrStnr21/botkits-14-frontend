import React, { FC } from 'react';

export interface ICheckIcon {
  color?: string;
  width?: number;
  height?: number;
}

const CheckIcon: FC<ICheckIcon> = ({ color, width = 18, height = 18 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15 4.5L6.75 12.75L3 9"
      stroke={color || '#243CBB'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckIcon;
