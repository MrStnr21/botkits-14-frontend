import { FC, useState } from 'react';
import styles from './button-inline.module.scss';
// eslint-disable-next-line import/no-cycle
import ConstructorHelperButton from '../../../../../ui/buttons/constructor-helper-botton/constructor-helper-botton';
import Input from '../../../../../ui/inputs/input/input';

type TButtonProps = {
  onClick: (id: string) => void;
  name: string;
  children: string;
  id: string;
  // askOnClick?: VoidFunction;
  deleteOnClick?: (id: string) => void;
  askIcon: string;
};

export type TBtnColors = 'white' | 'red' | 'green' | 'blue';

const InlineButton: FC<TButtonProps> = ({
  name,
  onClick,
  children,
  id,
  // askOnClick,
  deleteOnClick,
  askIcon,
}) => {
  const [btnColor, setBtnColor] = useState('white');
  const [hasInput, setHasInput] = useState<boolean>(false);

  const getColor = () => {
    switch (btnColor) {
      case 'white': {
        return styles.buttonWhite;
      }
      case 'red': {
        return styles['button-red'];
      }
      case 'green': {
        return styles['button-green'];
      }
      case 'blue': {
        return styles['button-blue'];
      }
      default: {
        return styles.buttonWhite;
      }
    }
  };

  return (
    <>
      <ConstructorHelperButton
        askOnClick={(val) => setHasInput(val)}
        deleteOnClick={deleteOnClick}
        askIcon={askIcon}
        color
        colorOnClick={(col) => setBtnColor(col)}
      />
      <button
        type="button"
        className={`${styles.button} ${getColor()}`}
        onClick={() => onClick(id)}
      >
        {name}
        {children}
        {hasInput && <Input placeholder="Введите" onChange={() => {}} />}
      </button>
    </>
  );
};

export default InlineButton;
