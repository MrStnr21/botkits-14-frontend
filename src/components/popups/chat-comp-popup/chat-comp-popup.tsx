import React, { FC, ChangeEvent, useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import stylesChatCompPopup from './chat-comp-popup.module.scss';
import logout from '../../../images/icon/24x24/drop down/logOutBlue.svg';
import close from '../../../images/icon/24x24/common/close.svg';
import check from '../../../images/icon/24x24/common/checkBlue.svg';
import docCircle from '../../../images/icon/47x47/doc-circle.svg';
import Typography from '../../../ui/typography/typography';
import FileItem, { Item } from '../../../ui/file-item/file-item';
import useDrag from '../../../utils/useDrag';

const initialItems: Item[] = [];

interface IChatCompPopup {
  onClick?: () => void;
}

const ChatCompPopup: FC<IChatCompPopup> = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>(initialItems);
  const [file, setFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const saveFilesToLocalStorage = (fileList: Item[]) => {
    localStorage.setItem('uploadedFiles', JSON.stringify(fileList));
  };
  useEffect(() => {
    const storedFiles = localStorage.getItem('uploadedFiles');
    if (storedFiles) {
      setItems(JSON.parse(storedFiles));
    }
  }, []);

  useEffect(() => {
    saveFilesToLocalStorage(items);
  }, [items]);
  const handleDropEvent = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);

      const newItem: Item = {
        title: e.dataTransfer.files[0].name,
        info: `${(e.dataTransfer.files[0].size / 1024).toFixed(1)} KB`,
        iconDock: docCircle,
        closeIcon: close,
        checkIcon: check,
        isUploaded: false,
      };

      setItems((prevItems) => [...prevItems, newItem]);
      console.log('Файл был успешно добавлен:', e.dataTransfer.files[0].name);
      setTimeout(() => {
        newItem.closeIcon = check; // Устанавливаем иконку галочки после задержки
        newItem.isUploaded = true; // Устанавливаем флаг загрузки в true
        setItems((prevItems) => [...prevItems]); // Обновляем состояние элемента
      }, 1000);
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
        iconDock: docCircle,
        closeIcon: close,
        checkIcon: check,
        isUploaded: true,
      };
      setItems((prevItems) => [...prevItems, newItem]);
      setTimeout(() => {
        newItem.closeIcon = check;
        newItem.isUploaded = true;
        setItems((prevItems) => [...prevItems]);
      }, 1000);
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
                <Typography tag="h4">
                  Перетяните файл <br /> или
                </Typography>
                {isDragging && (
                  <Typography
                    tag="h4"
                    className={stylesChatCompPopup.dropSectorTextOverlay}
                  >
                    Перетащите файл сюда
                  </Typography>
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
            <Typography tag="h4" className={stylesChatCompPopup.downloadText}>
              Загрузите
              <input
                id="fileInput"
                ref={fileInput}
                className={stylesChatCompPopup.fileInput}
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
              />
            </Typography>
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
