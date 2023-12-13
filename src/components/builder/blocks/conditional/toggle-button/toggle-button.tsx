import { FC } from 'react';
import styles from './toggle-button.module.scss';

type TToggleButtonProps = {
  onClick: () => void;
  isActive: boolean;
  text: string;
};

/**
 * компонент-кнопка для переключения типа добавляемого подблока в ConditionalBlock
 */
const ToggleButton: FC<TToggleButtonProps> = ({ text, onClick, isActive }) => {
  const additionalClass = isActive ? styles.active : styles['none-active'];
  return (
    <button
      type="button"
      className={`${styles.button} ${additionalClass}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default ToggleButton;
