import { FC } from 'react';
import { RenderLeafProps } from 'slate-react';
import {
  grey3,
  primaryOxfordBlueDefault,
} from '../../stylesheets/scss-variables';

const Leaf: FC<RenderLeafProps> = ({ attributes, leaf, children }) => {
  return (
    <span
      {...attributes}
      style={{
        fontWeight: leaf.bold ? 'bold' : 'normal',
        fontStyle: leaf.italic ? 'italic' : undefined,
        color: leaf.code ? grey3 : primaryOxfordBlueDefault,
      }}
    >
      {children}
    </span>
  );
};

export default Leaf;
