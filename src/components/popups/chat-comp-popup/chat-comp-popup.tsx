import React, { FC, ChangeEvent, useRef, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import stylesChatCompPopup from './chat-comp-popup.module.scss';
import logout from '../../../images/icon/24x24/drop down/logOutBlue.svg';

import Typography from '../../../ui/typography/typography';
import FileItem, { Item } from '../../../ui/file-item/file-item';
import useDrag from '../../../utils/useDrag';

interface IChatCompPopup {
  onClick?: () => void;
}

const ChatCompPopup: FC<IChatCompPopup> = (): JSX.Element => {
  const [items, setItems] = useState<Item[]>([]);
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [file, setFile] = useState<File | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const storedFiles = localStorage.getItem('chatCompPopupState');
    setIsMounted(true);
    if (storedFiles) {
      setItems(JSON.parse(storedFiles).items);
    }
  }, []);

  const uploadFile = async (
    fileToUpload: File,
    fileIndex: number,
    isLarge: boolean
  ) => {
    try {
      for (
        let progress = 0;
        progress <= fileToUpload.size; // пробегаемся по размеру файла
        progress += isLarge ? 250000 : 100000 // шаг загрузки для файлов свыше 1 мб и до 1 мб.
      ) {
        // eslint-disable-next-line no-await-in-loop
        await new Promise((resolve) => {
          setTimeout(resolve, 0);
        });

        setItems((prev) => {
          // eslint-disable-next-line no-param-reassign
          prev[fileIndex].uploadedProgress = isLarge
            ? `${(progress / (1024 * 1024)).toFixed(1)} MB`
            : `${(progress / 1024).toFixed(1)} KB`;
          return [...prev];
        });
      }
    } catch (error) {
      console.error('Ошибка загрузки файла:', error);
    } finally {
      setItems((prev) => {
        // eslint-disable-next-line no-param-reassign
        prev[fileIndex].isUploaded = true;
        return [...prev];
      });
    }
  };
  const handleDropEvent = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const uploadedFile: File = e.dataTransfer.files[0];

    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);

      const isLargeFile = uploadedFile.size / (1024 * 1024) >= 1;
      const fileSize = isLargeFile
        ? (uploadedFile.size / (1024 * 1024)).toFixed(1)
        : (uploadedFile.size / 1024).toFixed(1);

      const uploadFileInfo: Item = {
        name: uploadedFile.name,
        size: `${fileSize} ${isLargeFile ? 'MB' : 'KB'}`, // в зависимости от размера файла показываем в МБ (от 1 мб) или в КБ (до 1 мб)
        isUploaded: false,
        uploadedProgress: 0,
      };
      const uploadFileIndex = items.length;

      setItems((prevItems) => [...prevItems, uploadFileInfo]);

      await uploadFile(uploadedFile, uploadFileIndex, isLargeFile);
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
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.files && target.files.length > 0) {
      const selectedFile = target.files[0];
      const isLargeFile = selectedFile.size / (1024 * 1024) >= 1;
      const fileSize = isLargeFile
        ? (selectedFile.size / (1024 * 1024)).toFixed(1)
        : (selectedFile.size / 1024).toFixed(1);

      const uploadFileInfo: Item = {
        name: selectedFile.name,
        size: `${fileSize} ${isLargeFile ? 'MB' : 'KB'}`,
        isUploaded: false,
        uploadedProgress: 0,
      };
      const uploadFileIndex = items.length;

      setItems((prevItems) => [...prevItems, uploadFileInfo]);

      await uploadFile(selectedFile, uploadFileIndex, isLargeFile);
    }
  };

  const handleRemoveItem = (index: number) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };
  useEffect(() => {
    if (!isMounted) return;
    const popupState = {
      items,
    };
    localStorage.setItem('chatCompPopupState', JSON.stringify(popupState));
  }, [items]);

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
