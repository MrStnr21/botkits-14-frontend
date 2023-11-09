import React, { FC, useCallback, useEffect, useState } from 'react';
import { Tooltip } from '@mui/material';
import style from './file-item.module.scss';

export interface Item {
  iconDock: string;
  info: string;
  title: string;
  closeIcon: string;
  checkIcon: string;
  isUploaded: boolean;
}

interface FileItemProps {
  item: Item;
  index: number;
  handleRemoveItem: (index: number) => void;
}

const FileItem: FC<FileItemProps> = ({ item, index, handleRemoveItem }) => {
  const [isUploaded, setIsUploaded] = useState(false);

  useEffect(() => {
    if (item.iconDock === 'successIconPath') {
      setIsUploaded(true);
    }
  }, [item.iconDock]);
  const handleRemove = useCallback(
    () => handleRemoveItem(index),
    [index, handleRemoveItem]
  );

  return (
    <div className={style.itemWrapper}>
      <img
        className={style.iconDocument}
        alt="iconDocument"
        src={item.iconDock}
      />
      <div className={style.itemInfoWrapper}>
        <div className={style.itemTitle}>{item.title}</div>
        <div className={style.itemInfo}>{item.info}</div>
      </div>
      <Tooltip title="Удалить файл">
        <button className={style.button} type="button" onClick={handleRemove}>
          {isUploaded ? (
            <img
              className={style.iconCommonCheck}
              alt=""
              src={item.checkIcon}
            />
          ) : (
            <img
              className={style.iconCommonCheck}
              alt=""
              src={item.closeIcon}
            />
          )}
        </button>
      </Tooltip>
    </div>
  );
};

export default FileItem;
