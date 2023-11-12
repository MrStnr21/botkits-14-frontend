import React, { FC, useCallback } from 'react';
import { Tooltip } from '@mui/material';
import style from './file-item.module.scss';
import docCircle from '../../images/icon/47x47/doc-circle.svg';
import close from '../../images/icon/24x24/common/close.svg';
import check from '../../images/icon/24x24/common/checkBlue.svg';

export interface Item {
  size: `${string} MB` | `${string} KB`;
  name: string;
  isUploaded: boolean;
  uploadedProgress: `${string} MB` | `${string} KB` | number;
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
      <img className={style.iconDocument} alt="iconDocument" src={docCircle} />
      <div className={style.itemInfoWrapper}>
        <div className={style.itemTitle}>{item.name}</div>
        <div className={style.itemInfo}>
          {item.isUploaded ? (
            <span>
              {item.size} / {item.size}
            </span>
          ) : (
            <span>
              {item.uploadedProgress} / {item.size}
            </span>
          )}
        </div>
      </div>
      <Tooltip title="Удалить файл">
        <button className={style.button} type="button" onClick={handleRemove}>
          <img
            className={style.iconCommonCheck}
            alt=""
            src={item.isUploaded ? check : close}
          />
        </button>
      </Tooltip>
    </div>
  );
};

export default FileItem;
