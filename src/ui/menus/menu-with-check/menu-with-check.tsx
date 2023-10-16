import { FC } from 'react';

import stylesMenuWitchCheck from './menu-with-check.module.scss';

import checkIcon from '../../../images/icon/24x24/common/check.svg';

type TBottom = { text: string; isChecked: boolean };

export interface IMenuWithCheck {
  buttons: TBottom[];
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
}): JSX.Element => {
  const buttonHandler = (button: TBottom) => {
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
