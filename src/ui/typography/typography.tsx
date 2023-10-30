import { FC, ReactNode } from 'react';
import cn from 'classnames';
import style from './typography.module.scss';

type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
  className?: string;
  fontFamily?: 'primary' | 'secondary';
};

const Typography: FC<Props> = ({
  tag,
  children,
  className,
  fontFamily = 'primary',
}) => {
  const Tag = tag;

  return (
    <Tag className={cn(style[`${fontFamily}_${tag}`], className)}>
      {children}
    </Tag>
  );
};

export default Typography;
