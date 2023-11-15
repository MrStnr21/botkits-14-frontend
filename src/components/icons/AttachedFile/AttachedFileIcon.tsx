import React, { FC } from 'react';

export interface IAttachedFileIcon {
  color?: string;
  width?: number;
  height?: number;
}

const AttachedFileIcon: FC<IAttachedFileIcon> = ({
  color,
  width = 47,
  height = 47,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 47 47"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.5001 43.0832C34.3157 43.0832 43.0834 34.3154 43.0834 23.4998C43.0834 12.6843 34.3157 3.9165 23.5001 3.9165C12.6845 3.9165 3.91675 12.6843 3.91675 23.4998C3.91675 34.3154 12.6845 43.0832 23.5001 43.0832Z"
      fill={color || '#ECEFFF'}
    />
    <path
      d="M26.0173 15.3628H17.458C16.9239 15.3628 16.4117 15.5683 16.034 15.934C15.6563 16.2998 15.4441 16.7959 15.4441 17.3131V29.687C15.4441 30.2043 15.6563 30.7004 16.034 31.0661C16.4117 31.4319 16.9239 31.6374 17.458 31.6374H29.5418C30.0759 31.6374 30.5882 31.4319 30.9658 31.0661C31.3435 30.7004 31.5557 30.2043 31.5557 29.687V20.7263L26.0173 15.3628Z"
      fill={color || '#ECEFFF'}
      stroke="#243CBB"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.2354 15.3628V21.5767H31.5556"
      stroke={color || '#243CBB'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AttachedFileIcon;
