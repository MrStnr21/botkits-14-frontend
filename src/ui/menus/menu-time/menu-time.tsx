import { FC, useState } from 'react';

import stylesMenuTime from './menu-time.module.scss';

export interface IMenuTime {
  isActive?: boolean;
  saveFunction: Function;
  clearFunction: Function;
}

const MenuTime: FC<IMenuTime> = ({
  isActive = false,
  clearFunction,
  saveFunction,
}): JSX.Element => {
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
    <div className={boxClassName}>
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
