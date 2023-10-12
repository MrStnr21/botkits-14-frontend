import React, { FC } from 'react';

export interface ISearchIcon {
  size?: string;
  color?: string;
}

const SearchIcon: FC<ISearchIcon> = ({
  size = 'medium',
  color = '#A6B3C9',
}) => {
  return (
    <svg
      width={size === 'small' ? 18 : size === 'medium' ? 20 : 24}
      height={size === 'small' ? 18 : size === 'medium' ? 20 : 24}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 17.5L13.875 13.875"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SearchIcon;
