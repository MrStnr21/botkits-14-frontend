// to do: Menu
// https://trello.com/c/n9wbVo8O/12-%D0%B2%D1%81%D0%BF%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E
// https://trello.com/c/gUWxjeoo/17-%D0%BC%D0%B5%D0%BD%D1%8E-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9

import { FC, useState } from 'react';
import stylesMenuVariable from './menu-variable.module.scss';
import arrowIcon from '../../../images/icon/24x24/common/chevron-big.svg';

export interface IMenuVariable {
  buttons: string[];
  onClick?: any;
}

const MenuVariable: FC<IMenuVariable> = ({ buttons, onClick }) => {
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
                    onClick(name);
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
