import { FC, useState, useEffect } from 'react';

import styles from './menu-select-flow.module.scss';

import arrowIcon from '../../../images/icon/24x24/common/chevron-big.svg';
import Typography from '../../typography/typography';

export interface IMenuSelectFlow {
  buttons: string[];
  onClick?: Function;
  nameMenu?: string;
  width?: string;
  height?: string;
  active?: boolean;
}

const MenuSelectFlow: FC<IMenuSelectFlow> = ({
  buttons,
  onClick,
  nameMenu = 'Переменная',
  width,
  height,
  active = true,
}): JSX.Element => {
  const [variable, setVariable] = useState<string>(nameMenu);
  const [isActive, setIsActive] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');

  const changeVariableHandler = (text: string) => {
    setVariable(text);
  };

  const openHandler = () => {
    setTextColor(isActive === '' ? styles.grey : '');
    setIsActive(isActive === '' ? styles.active : '');
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsActive('');
      }
    };

    if (isActive !== '') {
      document.addEventListener('keydown', handleEsc);
    }

    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isActive]);

  return (
    <div>
      <div
        style={
          width && height
            ? {
                width: `${width}`,
                height: `${height}`,
              }
            : width
            ? { width }
            : height
            ? { height }
            : {}
        }
        className={styles.open_button}
        onClick={openHandler}
      >
        <div
          onClick={() => {
            if (isActive !== '') setIsActive('');
          }}
          className={`${styles.overlay} ${
            isActive !== '' ? styles.overlayActive : ''
          }`}
        />
        <Typography tag="p" className={`${styles.text} ${textColor}`}>
          {variable}
        </Typography>
        <img src={arrowIcon} alt="стрелка" className={styles.icon} />
      </div>
      <div
        style={width ? { width } : {}}
        className={`${styles.box} ${isActive}`}
      >
        <ul className={styles.ul}>
          {buttons.map((name, index) => {
            return (
              <li className={styles.li} key={name + index.toString}>
                <button
                  type="button"
                  className={`${styles.button} ${styles.text}`}
                  onClick={() => {
                    changeVariableHandler(name);
                    onClick!(name);
                    setIsActive('');
                    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                    active && openHandler();
                  }}
                >
                  {name}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default MenuSelectFlow;
