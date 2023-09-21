import React, { FC } from 'react';

interface ILinkIcon {
  color?: string;
  width?: number;
  height?: number;
}

const LinkIcon: FC<ILinkIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.8394 7H17.8394C19.1654 7 20.4372 7.52678 21.3749 8.46447C22.3126 9.40215 22.8394 10.6739 22.8394 12C22.8394 13.3261 22.3126 14.5979 21.3749 15.5355C20.4372 16.4732 19.1654 17 17.8394 17H15.8394M9.83936 17H7.83936C6.51327 17 5.2415 16.4732 4.30382 15.5355C3.36614 14.5979 2.83936 13.3261 2.83936 12C2.83936 10.6739 3.36614 9.40215 4.30382 8.46447C5.2415 7.52678 6.51327 7 7.83936 7H9.83936"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.83936 12H16.8394"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default LinkIcon;
