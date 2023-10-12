import { FC, useState } from 'react';

import stylesMenuVariable from './menu-variable.module.scss';

import arrowIcon from '../../../images/icon/24x24/common/chevron-big.svg';

export interface IMenuVariable {
  buttons: string[];
  onClick?: Function;
}

const MenuVariable: FC<IMenuVariable> = ({ buttons, onClick }): JSX.Element => {
  const [variable, setVariable] = useState<string>('Переменная');
  const [isActive, setIsActive] = useState<string>('');
  const [textColor, setTextColor] = useState<string>('');

  const changeVariableHandler = (text: string) => {
    setVariable(text);
  };

  const openHandler = () => {
    setTextColor(isActive === '' ? stylesMenuVariable.grey : '');
    setIsActive(isActive === '' ? stylesMenuVariable.active : '');
  };

  return (
    <div>
      <div className={stylesMenuVariable.open_button} onClick={openHandler}>
        <p className={`${stylesMenuVariable.text} ${textColor}`}>{variable}</p>
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
