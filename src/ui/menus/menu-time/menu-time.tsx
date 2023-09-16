// to do: Menu
// https://trello.com/c/n9wbVo8O/12-%D0%B2%D1%81%D0%BF%D0%BB%D1%8B%D0%B2%D0%B0%D1%8E%D1%89%D0%B5%D0%B5-%D0%BC%D0%B5%D0%BD%D1%8E
// https://trello.com/c/gUWxjeoo/17-%D0%BC%D0%B5%D0%BD%D1%8E-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D0%B9

import { FC, useState } from 'react';
import stylesMenuTime from './menu-time.module.scss';

export interface IMenuTime {
  isActive?: boolean;
  top?: number;
  left?: number;
  saveFunction: Function;
  clearFunction: Function;
}

const MenuTime: FC<IMenuTime> = ({
  isActive = false,
  top = 0,
  left = 0,
  clearFunction,
  saveFunction,
}) => {
  const [minute, setMinute] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);

  const saveHandler = () => {
    saveFunction(`${hour}:${minute}`);
  };

  const clearHandler = () => {
    setMinute(0);
    setHour(0);
    clearFunction();
  };

  const minutes = new Array(60).fill(0).map((item, index) => index);
  const hours = new Array(24).fill(0).map((item, index) => index);

  let boxClassName = stylesMenuTime.box;

  if (isActive) {
    boxClassName += ' ';
    boxClassName += stylesMenuTime.active;
  } else {
    boxClassName = stylesMenuTime.box;
  }

  return (
    <div
      className={boxClassName}
      style={{ top: `${top}px`, left: `${left}px` }}
    >
      <div className={stylesMenuTime.flex_row}>
        <div className={stylesMenuTime.numbers_box}>
          {hours.map((item) => {
            return (
              <div
                className={stylesMenuTime.number_unit}
                onClick={() => setHour(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
        <div className={stylesMenuTime.numbers_box}>
          {minutes.map((item) => {
            return (
              <div
                className={stylesMenuTime.number_unit}
                onClick={() => setMinute(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <div className={stylesMenuTime.flex_row}>
        <button
          className={stylesMenuTime.button}
          type="button"
          onClick={clearHandler}
        >
          Очистить
        </button>
        <button
          className={stylesMenuTime.button}
          type="button"
          onClick={saveHandler}
        >
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default MenuTime;
