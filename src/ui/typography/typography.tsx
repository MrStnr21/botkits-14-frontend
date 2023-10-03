import { FC, ReactNode } from 'react';

type Props = {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
};

const Typography: FC<Props> = ({ tag, children }) => {
  const Tag = tag;

  return <Tag>{children}</Tag>;
};

export default Typography;
