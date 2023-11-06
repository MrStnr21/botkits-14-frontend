import React, { FC } from 'react';

interface ICloseIcon {
  color?: string;
  width?: number;
  height?: number;
}

const CloseIcon: FC<ICloseIcon> = ({ color, width, height }) => (
  <svg
    width={width || 24}
    height={height || 24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 5L5 19"
      stroke={color || '#060C23'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 5L19 19"
      stroke={color || '#060C23'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseIcon;
