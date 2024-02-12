import { FC } from 'react';
import { Descendant, Text } from 'slate';
import styles from './slate-converted.module.scss';
import {
  grey3,
  offWhite,
  primaryOxfordBlueDefault,
} from '../../../../stylesheets/scss-variables';

type TProps = {
  descendant: Descendant;
};

const configureStyle = (leaf: Text) => {
  return {
    fontWeight: leaf.bold ? 'bold' : 'normal',
    fontStyle: leaf.italic ? 'italic' : undefined,
    color: leaf.code ? grey3 : primaryOxfordBlueDefault,
    backgroundColor: leaf.code ? offWhite : 'none',
  };
};

const SlateConverter: FC<TProps> = ({ descendant }) => {
  return (
    <p className={styles.descendant}>
      {descendant.children?.map((item) => (
        <span key={item.text} style={configureStyle(item)}>
          {item.text}
        </span>
      ))}
    </p>
  );
};

export default SlateConverter;
