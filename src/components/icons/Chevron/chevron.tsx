import React, { FC } from 'react';

export interface IChevronIcon {
  color?: string;
  width?: number;
  height?: number;
}

const ChevronIcon: FC<IChevronIcon> = ({ color, width = 16, height = 16 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.6667 6.28027L8.00001 10.9469L3.33334 6.28027"
      stroke={color || '#060C23'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ChevronIcon;
