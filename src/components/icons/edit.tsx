import React, { FC } from 'react';

interface IEditIcon {
  color?: string;
  width?: number;
  height?: number;
}

const EditIcon: FC<IEditIcon> = ({ color, width = 24, height = 24 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.5 4H4.88889C4.38792 4 3.90748 4.21071 3.55324 4.58579C3.19901 4.96086 3 5.46957 3 6V20C3 20.5304 3.19901 21.0391 3.55324 21.4142C3.90748 21.7893 4.38792 22 4.88889 22H18.1111C18.6121 22 19.0925 21.7893 19.4468 21.4142C19.801 21.0391 20 20.5304 20 20V13"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.5 2.50001C18.8978 2.10219 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10219 21.5 2.50001C21.8978 2.89784 22.1213 3.4374 22.1213 4.00001C22.1213 4.56262 21.8978 5.10219 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
      stroke={color || 'currentColor'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EditIcon;
