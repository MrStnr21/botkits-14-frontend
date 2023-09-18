import { FC } from 'react';

interface LogoBotKitsProps {
  width?: number;
  height?: number;
}

const Logo: FC<LogoBotKitsProps> = ({ width, height }) => {
  const logoWidth = width || 128;
  const logoHeight = height || 30;

  return (
    <svg
      width={logoWidth}
      height={logoHeight}
      viewBox="0 0 128 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4807 9.98737C9.4013 9.98737 3.66235 15.6683 3.66235 22.676V23.9556C3.66235 25.6241 5.02877 26.9767 6.71433 26.9767H7.67967C8.67632 26.9767 9.48996 26.1877 9.51047 25.2013L9.52407 24.5473C9.52864 24.3278 9.65319 24.128 9.84939 24.0254C10.0456 23.9229 10.2825 23.9338 10.4682 24.054L11.4721 24.7033C14.5151 26.6717 18.4462 26.6717 21.4892 24.7033L22.4931 24.054C22.6788 23.9338 22.9157 23.9229 23.1119 24.0254C23.3081 24.128 23.4327 24.3278 23.4372 24.5473L23.4508 25.2013C23.4714 26.1877 24.285 26.9767 25.2816 26.9767H26.247C27.9325 26.9767 29.299 25.6241 29.299 23.9556V22.676C29.299 15.6683 23.56 9.98737 16.4807 9.98737ZM2.44156 22.676C2.44156 15.0009 8.72708 8.77893 16.4807 8.77893C24.2342 8.77893 30.5198 15.0009 30.5198 22.676V23.9556C30.5198 26.2915 28.6068 28.1851 26.247 28.1851H25.2816C23.7637 28.1851 22.5005 27.087 22.2679 25.6432L22.157 25.715C18.7083 27.9458 14.253 27.9458 10.8043 25.715L10.6934 25.6432C10.4609 27.087 9.19762 28.1851 7.67967 28.1851H6.71433C4.35454 28.1851 2.44156 26.2915 2.44156 23.9556V22.676Z"
        fill="#243CBB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8703 6.64491C7.05105 6.96277 0 14.1402 0 22.9479V24.5621C0 27.5654 2.45955 30.0001 5.49356 30.0001H27.4678C30.5018 30.0001 32.9614 27.5654 32.9614 24.5621V22.9479C32.9614 14.1402 25.9103 6.96277 17.0911 6.64491V4.22961H15.8703V6.64491ZM16.4807 7.84238C8.05288 7.84238 1.22079 14.6054 1.22079 22.9479V24.5621C1.22079 26.898 3.13377 28.7916 5.49356 28.7916H27.4678C29.8276 28.7916 31.7406 26.898 31.7406 24.5621V22.9479C31.7406 14.6054 24.9085 7.84238 16.4807 7.84238Z"
        fill="#243CBB"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.4807 1.20844C15.8065 1.20844 15.2599 1.74948 15.2599 2.41689C15.2599 3.08429 15.8065 3.62533 16.4807 3.62533C17.1549 3.62533 17.7015 3.08429 17.7015 2.41689C17.7015 1.74948 17.1549 1.20844 16.4807 1.20844ZM14.0391 2.41689C14.0391 1.08208 15.1322 0 16.4807 0C17.8291 0 18.9223 1.08208 18.9223 2.41689C18.9223 3.7517 17.8291 4.83377 16.4807 4.83377C15.1322 4.83377 14.0391 3.7517 14.0391 2.41689Z"
        fill="#243CBB"
      />
      <ellipse
        cx="10.8333"
        cy="19.1667"
        rx="1.66667"
        ry="1.66667"
        fill="#243CBB"
      />
      <ellipse
        cx="22.5"
        cy="19.1667"
        rx="1.66667"
        ry="1.66667"
        fill="#243CBB"
      />
      <path
        d="M43.226 14.2983H47.8553C49.0272 14.2983 49.9452 14.6141 50.6094 15.2457C51.2735 15.8773 51.6055 16.7216 51.6055 17.7786C51.6055 18.5907 51.4037 19.2287 51 19.6928C50.6094 20.1568 50.1015 20.4855 49.4765 20.6789V20.7369C50.2448 20.9173 50.8763 21.2589 51.3711 21.7616C51.866 22.2515 52.1134 22.9669 52.1134 23.9078C52.1134 24.4492 52.0222 24.9584 51.8399 25.4353C51.6576 25.9122 51.3972 26.3247 51.0586 26.6728C50.7331 27.0208 50.3424 27.2979 49.8867 27.5042C49.4439 27.6975 48.9621 27.7942 48.4412 27.7942H43.226V14.2983ZM47.9529 26.3827C48.7082 26.3827 49.3007 26.2152 49.7304 25.88C50.1601 25.5449 50.375 25.0293 50.375 24.3332V23.5405C50.375 22.8573 50.1601 22.3481 49.7304 22.013C49.3007 21.665 48.7082 21.491 47.9529 21.491H44.8668V26.3827H47.9529ZM47.6795 20.1568C48.3696 20.1568 48.91 20.0086 49.3007 19.7121C49.6913 19.4028 49.8867 18.9387 49.8867 18.32V17.5659C49.8867 16.9472 49.6913 16.4832 49.3007 16.1738C48.91 15.8644 48.3696 15.7098 47.6795 15.7098H44.8668V20.1568H47.6795Z"
        fill="#243CBB"
      />
      <path
        d="M58.9568 28.0262C58.2536 28.0262 57.6156 27.9038 57.0426 27.6589C56.4827 27.4139 56.0009 27.0659 55.5972 26.6148C55.2066 26.1507 54.9071 25.6029 54.6987 24.9713C54.4904 24.3268 54.3862 23.6049 54.3862 22.8057C54.3862 22.0194 54.4904 21.304 54.6987 20.6595C54.9071 20.015 55.2066 19.4672 55.5972 19.0161C56.0009 18.552 56.4827 18.1975 57.0426 17.9526C57.6156 17.7077 58.2536 17.5853 58.9568 17.5853C59.66 17.5853 60.2916 17.7077 60.8515 17.9526C61.4245 18.1975 61.9063 18.552 62.2969 19.0161C62.7006 19.4672 63.0066 20.015 63.2149 20.6595C63.4233 21.304 63.5275 22.0194 63.5275 22.8057C63.5275 23.6049 63.4233 24.3268 63.2149 24.9713C63.0066 25.6029 62.7006 26.1507 62.2969 26.6148C61.9063 27.0659 61.4245 27.4139 60.8515 27.6589C60.2916 27.9038 59.66 28.0262 58.9568 28.0262ZM58.9568 26.6921C59.8293 26.6921 60.5325 26.4343 61.0664 25.9187C61.6002 25.4031 61.8672 24.6039 61.8672 23.5211V22.0903C61.8672 21.0076 61.6002 20.2084 61.0664 19.6928C60.5325 19.1772 59.8293 18.9194 58.9568 18.9194C58.0844 18.9194 57.3812 19.1772 56.8473 19.6928C56.3134 20.2084 56.0465 21.0076 56.0465 22.0903V23.5211C56.0465 24.6039 56.3134 25.4031 56.8473 25.9187C57.3812 26.4343 58.0844 26.6921 58.9568 26.6921Z"
        fill="#243CBB"
      />
      <path
        d="M71.035 27.7942C70.2667 27.7942 69.7003 27.5815 69.3357 27.1561C68.9841 26.7308 68.8083 26.1829 68.8083 25.5127V19.1321H65.4487V17.8173H67.9489C68.2874 17.8173 68.5218 17.7528 68.652 17.6239C68.7953 17.4821 68.8669 17.2437 68.8669 16.9085V14.2983H70.3709V17.8173H74.9611V19.1321H70.3709V26.4794H74.9611V27.7942H71.035Z"
        fill="#243CBB"
      />
      <path
        d="M87.7495 21.1816L85.7962 23.4631V27.7942H84.1555V14.2983H85.7962V21.3363H85.8548L87.6518 19.0934L91.6756 14.2983H93.6484L88.8629 19.9828L93.7851 27.7942H91.8709L87.7495 21.1816Z"
        fill="#243CBB"
      />
      <path
        d="M100.57 15.6131C100.114 15.6131 99.7951 15.5229 99.6128 15.3424C99.4305 15.149 99.3394 14.9106 99.3394 14.627V14.3176C99.3394 14.0341 99.4305 13.802 99.6128 13.6216C99.7951 13.4282 100.114 13.3315 100.57 13.3315C101.026 13.3315 101.345 13.4282 101.527 13.6216C101.709 13.802 101.8 14.0341 101.8 14.3176V14.627C101.8 14.9106 101.709 15.149 101.527 15.3424C101.345 15.5229 101.026 15.6131 100.57 15.6131ZM96.1556 26.4794H99.7886V19.1321H96.1556V17.8173H101.351V26.4794H104.75V27.7942H96.1556V26.4794Z"
        fill="#243CBB"
      />
      <path
        d="M112.023 27.7942C111.255 27.7942 110.688 27.5815 110.324 27.1561C109.972 26.7308 109.796 26.1829 109.796 25.5127V19.1321H106.437V17.8173H108.937C109.276 17.8173 109.51 17.7528 109.64 17.6239C109.783 17.4821 109.855 17.2437 109.855 16.9085V14.2983H111.359V17.8173H115.949V19.1321H111.359V26.4794H115.949V27.7942H112.023Z"
        fill="#243CBB"
      />
      <path
        d="M123.242 28.0262C122.187 28.0262 121.276 27.8522 120.507 27.5042C119.752 27.1432 119.107 26.6663 118.574 26.0734L119.628 25.1646C120.11 25.6673 120.638 26.054 121.21 26.3247C121.783 26.5954 122.474 26.7308 123.281 26.7308C124.062 26.7308 124.7 26.5954 125.195 26.3247C125.703 26.0411 125.957 25.6029 125.957 25.0099C125.957 24.7521 125.905 24.5395 125.801 24.3719C125.709 24.1914 125.579 24.0496 125.41 23.9465C125.241 23.8434 125.052 23.7661 124.844 23.7145C124.635 23.65 124.414 23.5985 124.179 23.5598L122.597 23.3278C122.246 23.2762 121.862 23.2053 121.445 23.1151C121.041 23.0249 120.67 22.8831 120.332 22.6897C119.993 22.4835 119.706 22.2128 119.472 21.8777C119.251 21.5425 119.14 21.1043 119.14 20.5629C119.14 20.0602 119.238 19.6283 119.433 19.2674C119.641 18.8936 119.928 18.5842 120.292 18.3393C120.657 18.0815 121.087 17.8946 121.582 17.7786C122.076 17.6497 122.617 17.5853 123.203 17.5853C124.114 17.5853 124.902 17.7271 125.566 18.0106C126.243 18.2942 126.823 18.6874 127.305 19.1901L126.289 20.1375C126.172 19.9957 126.022 19.8539 125.84 19.7121C125.67 19.5574 125.456 19.4221 125.195 19.3061C124.948 19.1772 124.655 19.0741 124.316 18.9967C123.978 18.9194 123.587 18.8807 123.144 18.8807C122.35 18.8807 121.738 19.0161 121.308 19.2868C120.891 19.5574 120.683 19.9506 120.683 20.4662C120.683 20.724 120.729 20.9431 120.82 21.1236C120.924 21.2912 121.061 21.4265 121.23 21.5296C121.399 21.6327 121.588 21.7165 121.796 21.781C122.018 21.8325 122.239 21.8777 122.461 21.9163L124.043 22.1483C124.407 22.1999 124.791 22.2708 125.195 22.361C125.599 22.4513 125.97 22.5995 126.308 22.8057C126.647 22.9991 126.927 23.2633 127.148 23.5985C127.383 23.9336 127.5 24.3719 127.5 24.9133C127.5 25.9058 127.109 26.6728 126.328 27.2141C125.56 27.7555 124.531 28.0262 123.242 28.0262Z"
        fill="#243CBB"
      />
    </svg>
  );
};

export default Logo;
