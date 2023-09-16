// to do: Menu
// https://trello.com/c/n9wbVo8O/12-%D0%B2%D1%81%D0%BF%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E
// https://trello.com/c/gUWxjeoo/17-%D0%BC%D0%B5%D0%BD%D1%8E-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9

import { FC } from 'react';
import stylesMenuWitchCheck from './menu-with-check.module.scss';
import checkIcon from '../../../images/icon/24x24/common/check.svg';

export interface IMenuWithCheck {
  buttons: { text: string; isChecked: boolean }[];
  isActive?: boolean;
  top?: number;
  left?: number;
  onClick: Function;
}

const MenuWithCheck: FC<IMenuWithCheck> = ({
  buttons,
  isActive = false,
  top = 0,
  left = 0,
  onClick,
}) => {
  const buttonHandler = (button: any) => {
    const index = buttons.findIndex((item) => item.text === button.text);
    const buttonArr = buttons;
    const newButton = { text: button.text, isChecked: !button.isChecked };

    buttonArr.splice(index, 1, newButton);

    onClick([...buttonArr]);
  };

  let boxClassName = stylesMenuWitchCheck.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuWitchCheck.active;
  }

  return (
    <div
      style={{ top: `${top}px`, left: `${left}px` }}
      className={boxClassName}
    >
      {buttons.map((item) => {
        return (
          <button
            type="button"
            key={+item.text}
            className={stylesMenuWitchCheck.button}
            onClick={() => {
              buttonHandler(item);
            }}
          >
            {item.text}
            {item.isChecked && (
              <img
                src={checkIcon}
                className={stylesMenuWitchCheck.icon}
                alt="Галочка"
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default MenuWithCheck;
