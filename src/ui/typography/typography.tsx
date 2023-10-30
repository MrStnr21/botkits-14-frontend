import { FC, ReactNode } from 'react';
import cn from 'classnames/bind';
import style from './typography.module.scss';

type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  className?: string;
  fontFamily?: 'primary' | 'secondary';
};

const cx = cn.bind(style);

const Typography: FC<Props> = ({
  tag,
  children,
  className,
  fontFamily = 'primary',
}) => {
  const Tag = tag;

  const mainCn = cx(`${fontFamily}_${tag}`, className);

  return <Tag className={mainCn}>{children}</Tag>;
};

export default Typography;
