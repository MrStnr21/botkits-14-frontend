import React, { FC, ChangeEvent, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import stylesChatCompPopup from './chat-comp-popup.module.scss';
import logout from '../../../images/icon/24x24/drop down/logOutBlue.svg';
import close from '../../../images/icon/24x24/common/close.svg';
import docCircle from '../../../images/icon/47x47/doc-circle.svg';
import Typography from '../../../ui/typography/typography';

const initialItems: any[] | (() => any[]) = [];

interface IChatCompPopup {
  onClick?: () => void;
}

const ChatCompPopup: FC<IChatCompPopup> = (): JSX.Element => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);
  // const [shouldRemoveElements] = useState(false);
  const [items, setItems] = useState(initialItems);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [draggedFile, setDraggedFile] = useState<File | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const handleDragEnter = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsDragging(true);
    console.log('сработала функция handleDragEnter');
  };

  const handleDragLeave = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setIsDragging(false);
    console.log('сработала функция handleDragLeave');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
      setDraggedFile(e.dataTransfer.files[0]);

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
  const handleDragOver = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log('сработала функция handleDragOver');
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log('сработала функция handleMouseEnter');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    console.log('сработала функция handleMouseLeave');
  };
  const handleFileInputClick = () => fileInput.current?.click();
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.files && target.files.length > 0) {
      const selectedFile = target.files[0];
      setUploadedFile(selectedFile);
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
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
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
                  <div
                    onClick={(e: { preventDefault: () => any }) =>
                      e.preventDefault()
                    }
                    className={stylesChatCompPopup.dropSectorTextOverlay}
                  >
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
              <div key={uuidv4()} className={stylesChatCompPopup.itemWrapper}>
                <img
                  className={stylesChatCompPopup.iconDocument}
                  alt=""
                  src={item.icon}
                />
                <div className={stylesChatCompPopup.itemInfoWrapper}>
                  <div className={stylesChatCompPopup.itemTitle}>
                    {item.title}
                  </div>
                  <div className={stylesChatCompPopup.itemInfo}>
                    {item.info}
                  </div>
                </div>
                <button
                  className={stylesChatCompPopup.button}
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                >
                  <img
                    className={stylesChatCompPopup.iconCommonCheck}
                    alt=""
                    src={item.checkIcon}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatCompPopup;
