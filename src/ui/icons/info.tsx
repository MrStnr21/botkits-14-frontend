import React, { FC } from 'react';

interface IInfoIcon {
  color?: string;
  width?: number;
  height?: number;
}

const InfoIcon: FC<IInfoIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.5131 12C21.5131 17.2554 17.2461 21.5299 11.9999 21.5299C6.75373 21.5299 2.48682 17.2554 2.48682 12C2.48682 6.74455 6.75373 2.47012 11.9999 2.47012C17.2461 2.47012 21.5131 6.74455 21.5131 12Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
    />
    <path
      d="M9.93652 10.5198H12.1749V16.5972"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.30664 16.6672H15.0075"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.4868 7.08462C13.4868 7.81198 12.9423 8.53933 12.0347 8.53933C11.3086 8.53933 10.5825 7.99381 10.5825 7.08462C10.5825 6.35727 11.1271 5.62991 12.0347 5.62991C12.7607 5.62991 13.4868 6.35727 13.4868 7.08462Z"
      fill={color || 'currentColor'}
    />
  </svg>
);

export default InfoIcon;
