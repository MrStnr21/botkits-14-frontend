import React, { FC } from 'react';

interface IUpdate {
  color?: string;
  width?: number;
  height?: number;
}

const Update: FC<IUpdate> = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 1.33331V5.33331H10"
      stroke="#A6B3C9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 7.99997C2.00105 6.84218 2.33707 5.70942 2.9675 4.73833C3.59794 3.76723 4.49588 2.99928 5.55301 2.52709C6.61013 2.05491 7.7813 1.89866 8.92524 2.0772C10.0692 2.25574 11.137 2.76144 12 3.5333L14 5.3333"
      stroke="#A6B3C9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M2 14.6667V10.6667H6"
      stroke="#A6B3C9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 8C13.9989 9.15779 13.6629 10.2905 13.0325 11.2616C12.4021 12.2327 11.5041 13.0007 10.447 13.4729C9.38987 13.9451 8.2187 14.1013 7.07476 13.9228C5.93082 13.7442 4.86297 13.2385 4 12.4667L2 10.6667"
      stroke="#A6B3C9"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default Update;
