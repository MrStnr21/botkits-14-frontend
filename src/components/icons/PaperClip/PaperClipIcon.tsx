import React, { FC } from 'react';

export interface IPaperClipIcon {
  color?: string;
  width?: number;
  height?: number;
}

const PaperClipIcon: FC<IPaperClipIcon> = ({
  color = '#A6B3C9',
  width = 24,
  height = 24,
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.4398 11.05L12.2498 20.24C11.124 21.3658 9.59699 21.9983 8.0048 21.9983C6.41262 21.9983 4.88565 21.3658 3.7598 20.24C2.63396 19.1142 2.00146 17.5872 2.00146 15.995C2.00146 14.4028 2.63396 12.8758 3.7598 11.75L12.9498 2.56C13.7004 1.80944 14.7183 1.38778 15.7798 1.38778C16.8413 1.38778 17.8592 1.80944 18.6098 2.56C19.3604 3.31057 19.782 4.32855 19.782 5.39C19.782 6.45146 19.3604 7.46944 18.6098 8.22L9.4098 17.41C9.03452 17.7853 8.52553 17.9961 7.9948 17.9961C7.46407 17.9961 6.95508 17.7853 6.5798 17.41C6.20452 17.0347 5.99369 16.5257 5.99369 15.995C5.99369 15.4643 6.20452 14.9553 6.5798 14.58L15.0698 6.1"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default PaperClipIcon;
