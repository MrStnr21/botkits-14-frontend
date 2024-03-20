import React, { FC } from 'react';

export interface IExportIcon {
  color?: string;
  width?: number;
  height?: number;
}

const ExportIcon: FC<IExportIcon> = ({ color, width = 50, height = 50 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M43.75 31.25V39.5833C43.75 40.6884 43.311 41.7482 42.5296 42.5296C41.7482 43.311 40.6884 43.75 39.5833 43.75H10.4167C9.3116 43.75 8.25179 43.311 7.47039 42.5296C6.68899 41.7482 6.25 40.6884 6.25 39.5833L6.25 31.25"
      stroke={color || '#243CBB'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M35.4168 16.667L25.0002 6.25032L14.5835 16.667"
      stroke={color || '#243CBB'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 6.25V31.25"
      stroke={color || '#243CBB'}
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default ExportIcon;
