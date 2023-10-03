import React, { FC } from 'react';

export interface ICloseSmallIcon {
  color?: string;
  width?: number;
  height?: number;
}

const CloseSmallIcon: FC<ICloseSmallIcon> = ({
  color,
  width = 18,
  height = 18,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.25 3.75L3.75 14.25"
      stroke={color || '#A6B3C9'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 3.75L14.25 14.25"
      stroke={color || '#A6B3C9'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CloseSmallIcon;
