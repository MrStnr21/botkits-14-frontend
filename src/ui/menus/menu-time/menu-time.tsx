import { FC, useState } from 'react';
import stylesMenuTime from './menu-time.module.scss';

export interface IMenuTime {
  curHour?: number;
  curMin?: number;
  saveFunction: Function;
  clearFunction: Function;
  closeMenu: () => void;
}

const MenuTime: FC<IMenuTime> = ({
  curHour,
  curMin,
  clearFunction,
  saveFunction,
  closeMenu,
}): JSX.Element => {
  const [minute, setMinute] = useState<number>(curMin || 0);
  const [hour, setHour] = useState<number>(curHour || 0);

  const saveHandler = () => {
    saveFunction(hour * 60 + minute);
    closeMenu();
  };

  const clearHandler = () => {
    setMinute(0);
    setHour(0);
    clearFunction();
    closeMenu();
  };

  const stopPropogation = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const minutes = new Array(60).fill(0).map((item, index) => index);
  const hours = new Array(24).fill(0).map((item, index) => index);

  return (
    <div onClick={stopPropogation} className={stylesMenuTime.box}>
      <div className={stylesMenuTime.flex_row}>
        <div className={stylesMenuTime.numbers_box}>
          {hours.map((item) => {
            return (
              <div
                className={`${stylesMenuTime.number_unit} ${
                  item === hour ? stylesMenuTime.number_unit_active : ''
                }`}
                onClick={() => setHour(item)}
                key={item}
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
                className={`${stylesMenuTime.number_unit} ${
                  item === minute ? stylesMenuTime.number_unit_active : ''
                }`}
                onClick={() => setMinute(item)}
                key={item}
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
