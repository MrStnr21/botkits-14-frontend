import React, { FC, ChangeEvent, useRef, useState, useCallback } from 'react';
import { v4 as uuidv4 } from 'uuid';
import stylesChatCompPopup from './chat-comp-popup.module.scss';
import logout from '../../../images/icon/24x24/drop down/logOutBlue.svg';
import close from '../../../images/icon/24x24/common/close.svg';
import docCircle from '../../../images/icon/47x47/doc-circle.svg';
import Typography from '../../../ui/typography/typography';

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
    <div className={stylesChatCompPopup.itemWrapper}>
      <img
        className={stylesChatCompPopup.iconDocument}
        alt=""
        src={item.icon}
      />
      <div className={stylesChatCompPopup.itemInfoWrapper}>
        <div className={stylesChatCompPopup.itemTitle}>{item.title}</div>
        <div className={stylesChatCompPopup.itemInfo}>{item.info}</div>
      </div>
      <button
        className={stylesChatCompPopup.button}
        type="button"
        onClick={handleRemove}
      >
        <img
          className={stylesChatCompPopup.iconCommonCheck}
          alt=""
          src={item.checkIcon}
        />
      </button>
    </div>
  );
};

const initialItems: any[] | (() => any[]) = [];

interface IChatCompPopup {
  onClick?: () => void;
}

export function useDrag<Element extends HTMLElement>(
  onDrop: React.DragEventHandler<Element>
) {
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleDragEnter = () => setIsDragging(true);
  const handleDragLeave = () => setIsDragging(false);
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const handleDragOver = (e: React.DragEvent<Element>) => e.preventDefault();
  const handleDrop = (e: React.DragEvent<Element>) => {
    onDrop(e);
    setIsDragging(false);
  };

  return {
    isDragging,
    isHovered,
    handleDrop,
    handleDragOver,
    handleDragEnter,
    handleDragLeave,
    handleMouseEnter,
    handleMouseLeave,
  };
}

const ChatCompPopup: FC<IChatCompPopup> = (): JSX.Element => {
  const [items, setItems] = useState(initialItems);
  const [file, setFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  const handleDropEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);

      const newItem = {
        title: e.dataTransfer.files[0].name,
        info: `${(e.dataTransfer.files[0].size / 1024).toFixed(1)} KB`,
        icon: docCircle,
        checkIcon: close,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      console.log('Файл был успешно добавлен:', e.dataTransfer.files[0].name);
    }
  };
  const {
    isHovered,
    handleDrop,
    isDragging,
    handleDragOver,
    handleDragLeave,
    handleMouseLeave,
    handleMouseEnter,
    handleDragEnter,
  } = useDrag(handleDropEvent);

  const handleFileInputClick = () => fileInput.current?.click();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.files && target.files.length > 0) {
      const selectedFile = target.files[0];
      const newItem = {
        title: selectedFile.name,
        info: `${(selectedFile.size / 1024).toFixed(1)} KB`,
        icon: docCircle,
        checkIcon: close,
      };
      setItems((prevItems) => [...prevItems, newItem]);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  return (
    <div className={stylesChatCompPopup.container}>
      <div className={stylesChatCompPopup.popUp}>
        <div className={stylesChatCompPopup.dropSector}>
          <div
            onClick={handleFileInputClick}
            className={
              isDragging || isHovered
                ? `${stylesChatCompPopup.dropSectorDragging}`
                : `${stylesChatCompPopup.dropSectorWrapper}`
            }
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={stylesChatCompPopup.logOutParent}>
              <img
                className={stylesChatCompPopup.logOutIcon}
                alt="logout"
                src={logout}
              />
              <div className={stylesChatCompPopup.dropSectorText}>
                <Typography tag="p">
                  Перетяните файл <br /> или
                </Typography>
                {isDragging && (
                  <div className={stylesChatCompPopup.dropSectorTextOverlay}>
                    Перетащите файл сюда
                  </div>
                )}
                {isHovered && (
                  <div className={stylesChatCompPopup.dropSectorTextOverlay}>
                    {file && (
                      <div
                        className={stylesChatCompPopup.dropSectorTextFileName}
                      >
                        {file.name}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
            <div className={stylesChatCompPopup.downloadText}>
              Загрузите
              <input
                id="fileInput"
                ref={fileInput}
                className={stylesChatCompPopup.fileInput}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </div>
          </div>
        </div>
        <div className={stylesChatCompPopup.itemSector}>
          <div className={stylesChatCompPopup.itemsContainer}>
            {items.map((item, index) => (
              <FileItem
                key={uuidv4()}
                item={item}
                index={index}
                handleRemoveItem={handleRemoveItem}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCompPopup;
