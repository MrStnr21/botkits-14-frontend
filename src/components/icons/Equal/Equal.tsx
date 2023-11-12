import React, { FC } from 'react';

interface IEqualIcon {
  size?: number;
}

const EqualIcon: FC<IEqualIcon> = ({ size }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 9H19"
      stroke="#243CBB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 15H19"
      stroke="#243CBB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EqualIcon;
