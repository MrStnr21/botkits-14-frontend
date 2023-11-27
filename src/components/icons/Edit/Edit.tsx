import React, { FC } from 'react';

interface IEditIcon {
  color?: string;
  size?: number;
}

const EditIcon: FC<IEditIcon> = ({ color = '#243CBB', size }) => (
  <svg
    width={size || 16}
    height={size || 16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.66667 2.66797H3.25926C2.92528 2.66797 2.60499 2.80844 2.36883 3.05849C2.13267 3.30854 2 3.64768 2 4.0013V13.3346C2 13.6883 2.13267 14.0274 2.36883 14.2774C2.60499 14.5275 2.92528 14.668 3.25926 14.668H12.0741C12.4081 14.668 12.7283 14.5275 12.9645 14.2774C13.2007 14.0274 13.3333 13.6883 13.3333 13.3346V8.66797"
      stroke={color || '#243CBB'}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.3335 1.66812C12.5987 1.4029 12.9584 1.25391 13.3335 1.25391C13.7086 1.25391 14.0683 1.4029 14.3335 1.66812C14.5987 1.93334 14.7477 2.29305 14.7477 2.66812C14.7477 3.04319 14.5987 3.4029 14.3335 3.66812L8.00016 10.0015L5.3335 10.6681L6.00016 8.00145L12.3335 1.66812Z"
      stroke={color || '#243CBB'}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EditIcon;
