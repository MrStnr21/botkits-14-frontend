import { FC } from 'react';
import stylesCover from './cover.module.css';

interface ICover {
  onClick: () => void;
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
  backgroundColor?: string;
}
const Cover: FC<ICover> = ({
  onClick,
  top = '0px',
  bottom = '0px',
  left = '0px',
  right = '0px',
  backgroundColor = 'rgba(0, 0, 0, 0.1)',
}) => {
  return (
    <div
      className={stylesCover.cover}
      onClick={onClick}
      style={{ top, bottom, left, right, backgroundColor }}
    />
  );
};

export default Cover;
