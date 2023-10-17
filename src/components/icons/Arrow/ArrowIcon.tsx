import React, { FC } from 'react';

export interface IArrowIcon {
  color?: string;
  position?: string;
  width?: number;
  height?: number;
}

const ArrowIcon: FC<IArrowIcon> = ({
  color = '#FFFFFF',
  position,
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform={
      (position === 'left' && 'rotate(-90)') ||
      (position === 'up' && 'rotate(0)') ||
      (position === 'right' && 'rotate(90)') ||
      (position === 'down' && 'rotate(180)') ||
      'rotate(0)'
    }
  >
    <path
      d="M12 19V5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 12L12 5L19 12"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ArrowIcon;
