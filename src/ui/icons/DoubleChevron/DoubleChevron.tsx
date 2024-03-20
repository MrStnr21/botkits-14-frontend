import React, { FC } from 'react';

export interface IProps {
  color?: string;
  position?: string;
  width?: number;
  height?: number;
  strokeWidth?: number;
}

const DoubleChevronIcon: FC<IProps> = ({
  color,
  position,
  width = 16,
  height = 16,
  strokeWidth = 1.4,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform={
      (position === 'left' && 'rotate(90)') ||
      (position === 'up' && 'rotate(180)') ||
      (position === 'right' && 'rotate(-90)') ||
      (position === 'down' && 'rotate(0)') ||
      'rotate(0)'
    }
  >
    <path
      d="M12 5.83203L8 1.83203L4 5.83203"
      stroke={color || '#243CBB'}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4 11.1641L8 15.1641L12 11.1641"
      stroke="#243CBB"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DoubleChevronIcon;
