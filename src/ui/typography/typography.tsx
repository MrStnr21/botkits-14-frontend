import { FC, ReactNode } from 'react';
import cn from 'classnames/bind';
import style from './typography.module.scss';

type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  className?: string;
  font?: 'IBM' | 'OpenSans';
};

const cx = cn.bind(style);

const Typography: FC<Props> = ({ tag, children, className, font = 'IBM' }) => {
  const Tag = tag;

  const mainCn = cx(tag, className);

  return (
    <Tag
      className={mainCn}
      style={{
        fontFamily:
          font === 'IBM'
            ? `'IBM Plex Mono', sans-serif`
            : `'Open Sans', sans-serif`,
      }}
    >
      {children}
    </Tag>
  );
};

export default Typography;
