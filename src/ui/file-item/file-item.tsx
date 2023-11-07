import React, { FC, useCallback } from 'react';
import style from './file-item.module.scss';

interface Item {
  icon: string;
  info: string;
  title: string;
  checkIcon: string;
}

interface FileItemProps {
  item: Item;
  index: number;
  handleRemoveItem: (index: number) => void;
}

const FileItem: FC<FileItemProps> = ({ item, index, handleRemoveItem }) => {
  const handleRemove = useCallback(
    () => handleRemoveItem(index),
    [index, handleRemoveItem]
  );

  return (
    <div className={style.itemWrapper}>
      <img className={style.iconDocument} alt="iconDocument" src={item.icon} />
      <div className={style.itemInfoWrapper}>
        <div className={style.itemTitle}>
          {item.title}
          {item.info}
        </div>
      </div>
      <button className={style.button} type="button" onClick={handleRemove}>
        <img className={style.iconCommonCheck} alt="" src={item.checkIcon} />
      </button>
    </div>
  );
};

export default FileItem;
