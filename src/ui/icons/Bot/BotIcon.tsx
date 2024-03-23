import React, { FC } from 'react';

export interface IBotIcon {
  color?: string;
  width?: number;
  height?: number;
}

const BotIcon: FC<IBotIcon> = ({ color, width = 18, height = 18 }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="9" cy="9" r="9" fill={color || '#243CBB'} />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.94372 6.99533C6.82001 6.99533 5.0984 8.69952 5.0984 10.8018V11.1856C5.0984 11.6861 5.50831 12.0919 6.01395 12.0919H6.30354C6.60252 12.0919 6.8466 11.8552 6.85276 11.5593L6.85684 11.3631C6.85821 11.2973 6.89557 11.2373 6.95443 11.2066C7.01328 11.1758 7.08436 11.1791 7.14008 11.2151L7.44123 11.4099C8.35408 12.0004 9.53336 12.0004 10.4462 11.4099L10.7474 11.2151C10.8031 11.1791 10.8742 11.1758 10.933 11.2066C10.9919 11.2373 11.0292 11.2973 11.0306 11.3631L11.0347 11.5593C11.0408 11.8552 11.2849 12.0919 11.5839 12.0919H11.8735C12.3791 12.0919 12.789 11.6861 12.789 11.1856V10.8018C12.789 8.69953 11.0674 6.99533 8.94372 6.99533ZM4.73218 10.8018C4.73218 8.49931 6.61775 6.63281 8.94372 6.63281C11.2697 6.63281 13.1553 8.49931 13.1553 10.8018V11.1856C13.1553 11.8863 12.5814 12.4544 11.8735 12.4544H11.5839C11.1285 12.4544 10.7496 12.125 10.6798 11.6919L10.6465 11.7134C9.61198 12.3826 8.27546 12.3826 7.2409 11.7134L7.20761 11.6919C7.13786 12.125 6.75891 12.4544 6.30354 12.4544H6.01395C5.30605 12.4544 4.73218 11.8863 4.73218 11.1856V10.8018Z"
      fill={color || '#FFFFFF'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.76088 5.99409C6.11522 6.08944 4 8.24259 4 10.8848V11.369C4 12.27 4.73783 13.0003 5.648 13.0003H12.24C13.1501 13.0003 13.888 12.27 13.888 11.369V10.8848C13.888 8.24259 11.7728 6.08944 9.1271 5.99409V5.26953H8.76088V5.99409ZM8.94399 6.35331C6.41576 6.35331 4.36622 8.38212 4.36622 10.8848V11.369C4.36622 12.0697 4.94009 12.6378 5.648 12.6378H12.24C12.9479 12.6378 13.5218 12.0697 13.5218 11.369V10.8848C13.5218 8.38212 11.4722 6.35331 8.94399 6.35331Z"
      fill={color || '#FFFFFF'}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.94436 4.36252C8.7421 4.36252 8.57814 4.52482 8.57814 4.72503C8.57814 4.92525 8.7421 5.08755 8.94436 5.08755C9.14662 5.08755 9.31058 4.92525 9.31058 4.72503C9.31058 4.52482 9.14662 4.36252 8.94436 4.36252ZM8.21191 4.72503C8.21191 4.32461 8.53984 4 8.94436 4C9.34888 4 9.6768 4.32461 9.6768 4.72503C9.6768 5.12546 9.34888 5.45007 8.94436 5.45007C8.53984 5.45007 8.21191 5.12546 8.21191 4.72503Z"
      fill={color || '#FFFFFF'}
    />
    <ellipse
      cx="7.24973"
      cy="9.74998"
      rx="0.499978"
      ry="0.499979"
      fill={color || '#FFFFFF'}
    />
    <ellipse
      cx="10.7499"
      cy="9.74998"
      rx="0.499977"
      ry="0.499979"
      fill={color || '#FFFFFF'}
    />
  </svg>
);

export default BotIcon;