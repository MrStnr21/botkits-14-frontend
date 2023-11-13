import React, { ChangeEvent, useRef, useState } from 'react';
import stylesChatDndPopup from './chat-dnd-popup.module.scss';
import Typography from '../../../ui/typography/typography';
import Button from '../../../ui/buttons/button/button';
import uploadIcon from '../../../images/icon/24x24/common/upload-rounded.svg';
import useDrag from '../../../utils/useDrag';
import { Item } from '../../../ui/file-item/file-item';

const ChatDndPopup = () => {
  const fileInput = useRef<HTMLInputElement>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [, setFile] = useState<File | null>(null);
  const [isFileSizeExceeded, setFileSizeExceeded] = useState(false);

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

      const isLargeFile = uploadedFile.size / (1024 * 1024) >= 20;
      const fileSize = isLargeFile
        ? (uploadedFile.size / (1024 * 1024)).toFixed(1)
        : (uploadedFile.size / 1024).toFixed(1);

      if (isLargeFile) {
        setFileSizeExceeded(true);
        // Если размер файла превышает 20 Мб, то выводим сообщение
      }

      const uploadFileInfo: Item = {
        name: uploadedFile.name,
        size: `${fileSize} ${isLargeFile ? 'MB' : 'KB'}`, // в зависимости от размера файла показываем в МБ (от 1 мб) или в КБ (до 1 мб)
        isUploaded: false,
        uploadedProgress: 0,
      };
      const uploadFileIndex = items.length;

      setItems((prevItems) => [...prevItems, uploadFileInfo]);

      if (!isFileSizeExceeded) {
        await uploadFile(uploadedFile, uploadFileIndex, isLargeFile);
      }
    }
  };
  const handleFileInputClick = () => fileInput.current?.click();
  const itemSectorClass = isFileSizeExceeded
    ? stylesChatDndPopup.itemSectorError
    : stylesChatDndPopup.itemSectorHovered;
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
  const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    if (target.files && target.files.length > 0) {
      const selectedFile = target.files[0];
      const isLargeFile = selectedFile.size / (1024 * 1024) >= 1;
      const fileSize = isLargeFile
        ? (selectedFile.size / (1024 * 1024)).toFixed(1)
        : (selectedFile.size / 1024).toFixed(1);

      if (isLargeFile) {
        setFileSizeExceeded(true);
        // Если размер файла превышает 20 Мб, то выводим сообщение
      }

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

  return (
    <div className={stylesChatDndPopup.container}>
      <Typography tag="h3">Добавление контента</Typography>
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={
          isDragging || isHovered
            ? stylesChatDndPopup.itemSector
            : itemSectorClass
        }
      >
        <div className={stylesChatDndPopup.itemSectorWrapper}>
          <Typography tag="span" className={stylesChatDndPopup.itemSectorText}>
            Перетяните файл в эту область
            <input
              id="fileInput"
              ref={fileInput}
              className={stylesChatDndPopup.fileInput}
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </Typography>
          <Typography tag="p" className={stylesChatDndPopup.nextLine}>
            или
          </Typography>
          <Button
            onClick={handleFileInputClick}
            className={stylesChatDndPopup.btnChooseFile}
            buttonHtmlType="button"
            variant="default"
            size="small"
            // disabled
          >
            <Typography tag="p" className={stylesChatDndPopup.uploadIconText}>
              Выберите файл
            </Typography>
            <img src={uploadIcon} alt="uploadIcon" />
          </Button>
        </div>
      </div>
      {isFileSizeExceeded ? (
        <Typography tag="p" className={stylesChatDndPopup.errorCaption}>
          Размер файла не должен превышать 20 Мб
        </Typography>
      ) : (
        <Typography tag="p" className={stylesChatDndPopup.caption}>
          DOC, DOCX, PDF, PNG, JPEG, GIF, MP3, WAV, MP4, AVI
        </Typography>
      )}
      <div className={stylesChatDndPopup.button}>
        <Button
          className={stylesChatDndPopup.buttonReject}
          variant="default"
          color="transparent"
          size="small"
          buttonHtmlType="reset"
        >
          отмена
        </Button>
        <Button
          variant="default"
          color="blue"
          size="small"
          buttonHtmlType="submit"
          disabled
        >
          <Typography tag="p" className={stylesChatDndPopup.send}>
            отправить
          </Typography>
        </Button>
      </div>
    </div>
  );
};

export default ChatDndPopup;
