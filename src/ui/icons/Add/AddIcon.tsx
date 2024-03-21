import React, { FC } from 'react';

export interface IAddIcon {
  color?: string;
  width?: number;
  height?: number;
  position?: string;
}

const AddIcon: FC<IAddIcon> = ({
  color,
  width = 36,
  height = 36,
  position,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    transform={
      (position === 'unfolded' && 'rotate(-45)') ||
      (position === 'folded' && 'rotate(0)') ||
      'rotate(0)'
    }
  >
    <circle cx="18" cy="18" r="15" fill={color || '#8392AB'} />
    <path
      d="M18 12.1667V23.8333"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.1665 18H23.8332"
      stroke="#FFFFFF"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddIcon;
