import React, { FC } from 'react';

export interface IHorizontalIcon {
  color?: string;
  width?: number;
  height?: number;
}

const VerticalIcon: FC<IHorizontalIcon> = ({
  color = '#A6B3C9',
  width,
  height,
}) => (
  <svg
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 17L6 20L9 17"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 18V4"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      x="15"
      y="4"
      width="6"
      height="5"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
    <rect
      x="15"
      y="13"
      width="6"
      height="5"
      stroke={color}
      strokeWidth="2"
      strokeLinejoin="round"
    />
  </svg>
);

export default VerticalIcon;
