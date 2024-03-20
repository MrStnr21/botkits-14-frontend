import React, { FC } from 'react';

export interface IQuickAnswerIcon {
  color?: string;
  width?: number;
  height?: number;
}

const QuickAnswerIcon: FC<IQuickAnswerIcon> = ({
  color,
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
      d="M10.8333 1.66699L2.5 11.667H10L9.16667 18.3337L17.5 8.33366H10L10.8333 1.66699Z"
      stroke={color || '#A6B3C9'}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default QuickAnswerIcon;
