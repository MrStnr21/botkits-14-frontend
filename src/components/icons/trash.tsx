import React, { FC } from 'react';

interface ITrashIcon {
  color?: string;
  width?: number;
  height?: number;
}

const TrashIcon: FC<ITrashIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3.375 6H5.29167H20.625"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.1665 6V4C8.1665 3.46957 8.36844 2.96086 8.72788 2.58579C9.08733 2.21071 9.57484 2 10.0832 2H13.9165C14.4248 2 14.9123 2.21071 15.2718 2.58579C15.6312 2.96086 15.8332 3.46957 15.8332 4V6M18.7082 6V20C18.7082 20.5304 18.5062 21.0391 18.1468 21.4142C17.7873 21.7893 17.2998 22 16.7915 22H7.20817C6.69984 22 6.21233 21.7893 5.85288 21.4142C5.49344 21.0391 5.2915 20.5304 5.2915 20V6H18.7082Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.0835 11V17"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.9165 11V17"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default TrashIcon;
