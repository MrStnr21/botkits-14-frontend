import { FC, useState, useEffect } from 'react';

import stylesMenuVariable from './menu-variable.module.scss';

import arrowIcon from '../../../images/icon/24x24/common/chevron-big.svg';
import Typography from '../../typography/typography';

export interface IMenuVariable {
  buttons: string[];
  onClick?: Function;
  nameMenu?: string;
}

const MenuVariable: FC<IMenuVariable> = ({
  buttons,
  onClick,
  nameMenu = 'Переменная',
}): JSX.Element => {
  const [variable, setVariable] = useState<string>(nameMenu);
  const [isActive, setIsActive] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');

  const changeVariableHandler = (text: string) => {
    setVariable(text);
  };

  const openHandler = () => {
    setTextColor(isActive === '' ? stylesMenuVariable.grey : '');
    setIsActive(isActive === '' ? stylesMenuVariable.active : '');
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
      <div className={stylesMenuVariable.open_button} onClick={openHandler}>
        <div
          onClick={() => {
            if (isActive !== '') setIsActive('');
          }}
          className={`${stylesMenuVariable.overlay} ${
            isActive !== '' ? stylesMenuVariable.overlayActive : ''
          }`}
        />
        <Typography
          tag="p"
          className={`${stylesMenuVariable.text} ${textColor}`}
        >
          {variable}
        </Typography>
        <img
          src={arrowIcon}
          alt="стрелка"
          className={stylesMenuVariable.icon}
        />
      </div>
      <div className={`${stylesMenuVariable.box} ${isActive}`}>
        <ul className={stylesMenuVariable.ul}>
          {buttons.map((name) => {
            return (
              <li className={stylesMenuVariable.li}>
                <button
                  type="button"
                  className={`${stylesMenuVariable.button} ${stylesMenuVariable.text}`}
                  onClick={() => {
                    changeVariableHandler(name);
                    onClick!(name);
                    setIsActive('');
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

export default MenuVariable;
