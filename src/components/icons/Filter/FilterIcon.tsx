import React, { FC } from 'react';

export interface IFilterIcon {
  color?: string;
  width?: number;
  height?: number;
}

const FilterIcon: FC<IFilterIcon> = ({
  color = '#060C23',
  width = 20,
  height = 20,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.83333 14.25H3"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3337 14.2493C16.3337 15.3999 15.4009 16.3327 14.2503 16.3327C13.0997 16.3327 12.167 15.3999 12.167 14.2493C12.167 13.0979 13.0997 12.166 14.2503 12.166C15.4009 12.166 16.3337 13.0979 16.3337 14.2493Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.833 5.41602H16.6663"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 5.08333C3 6.23478 3.93273 7.16667 5.08333 7.16667C6.23393 7.16667 7.16667 6.23478 7.16667 5.08333C7.16667 3.93273 6.23393 3 5.08333 3C3.93273 3 3 3.93273 3 5.08333Z"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FilterIcon;
