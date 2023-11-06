// верхий компонент
import React, { FC, useState, useCallback } from 'react';

import stylesButtonAddFile from './button-add-file.module.scss';

import ConstructorIconBotton from '../constructor-icon-botton/constructor-icon-botton';

import videoIcon from '../../../images/icon/24x24/add content/video.svg';
import musicIcon from '../../../images/icon/24x24/add content/music.svg';
import imageIcon from '../../../images/icon/24x24/add content/image.svg';
import fileIcon from '../../../images/icon/24x24/add content/file.svg';
import createbot from '../../../images/prewiew/createbot.png'; // for example

import { BUTTON_NAME } from '../../../utils/constants';

import ResultAddFile, { IResultProps } from './result-add-file/result-add-file';

import VideoCard from '../../../components/video-card/video-card';
import Typography from '../../typography/typography';

interface IButton {
  type: BUTTON_NAME;
  icon: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  accept: string; // но тут д.б.расширения
}

const Button: FC<IButton> = ({ type, icon, onChange, accept }): JSX.Element => {
  const [iconsSelected, setIconsSelected] = useState<Array<BUTTON_NAME>>([]);

  let changeArr: [] | Array<BUTTON_NAME>;

  const checkActiveIcon = useCallback(
    (iconValue: BUTTON_NAME) => {
      return iconsSelected.some((item) => item === iconValue);
    },
    [iconsSelected]
  );

  const openDownloadFile = (value: BUTTON_NAME) => {
    if (checkActiveIcon(value)) {
      // @todo  здесь должна быть другая логика - клик по крестику загруженного файла?
      changeArr = iconsSelected.filter((item) => {
        return item !== value;
      });
      setIconsSelected(changeArr);
    } else {
      setIconsSelected([...iconsSelected, value]);
      // @TODO  добавить функцию - открыть соответсвующий DownloadFile ? загрузить файл или вариант кнопки
    }
    // @TODO добавить функцию удаления добавленного контента
  };

  return (
    <div>
      <input
        className={stylesButtonAddFile.download__input}
        type="file"
        onChange={onChange}
        id={type}
        name={type}
        hidden
        accept={accept}
      />
      <label className={stylesButtonAddFile.download__label} htmlFor={type}>
        <ConstructorIconBotton
          value={type}
          active={checkActiveIcon(type)}
          onClick={openDownloadFile}
          icon={icon}
        />
      </label>
    </div>
  );
};

const ButtonAddFile: FC = (): JSX.Element => {
  const [isNoValid, setIsNoValid] = useState(false);
  const [fileList, setFileList] = useState<Array<IResultProps>>([]);

  const handleChange = (files: FileList | null) => {
    // console.log(files);
    if (files && files.length > 0) {
      if (files[0].size > 20 * 1024 * 1024) {
        setIsNoValid(true);
      } else {
        setFileList([
          ...fileList,
          {
            name: files[0].name,
            size: files[0].size,
            type: files[0].type,
          },
        ]);
      }
    }
  };

  return (
    <>
      {fileList.length > 0 && (
        <ul
          className={stylesButtonAddFile.output}
          aria-label="Выбранные файлы для загрузки"
        >
          {fileList.map((file, index) =>
            file.type.includes('video') ? (
              <li key={file.name + +index}>
                <VideoCard
                  src="https://www.youtube.com/embed/FKOn5DfpJDA"
                  title="Подключение чат бота и основные параметры | Bot Kits"
                  prewiew={createbot}
                  size="m"
                  hiddenRemoveButton={false}
                  hover={false}
                />
              </li>
            ) : (
              <li key={file.name + +index}>
                <ResultAddFile
                  name={file.name}
                  size={file.size}
                  type={file.type}
                  error={isNoValid}
                />
              </li>
            )
          )}
        </ul>
      )}
      <div className={stylesButtonAddFile.wrapper}>
        <Typography tag="h3" className={stylesButtonAddFile.header}>
          Дополните контентом
        </Typography>
        <div className={stylesButtonAddFile.inputsBox}>
          <Button
            type={BUTTON_NAME.IMAGE}
            icon={imageIcon}
            onChange={({ target }) => handleChange(target.files)}
            accept="image/*" // любые графические файлы;
          />
          <Button
            type={BUTTON_NAME.VIDEO}
            icon={videoIcon}
            onChange={({ target }) => handleChange(target.files)}
            accept="video/*" // любые видеофайлы;
          />
          <Button
            type={BUTTON_NAME.FILE}
            icon={fileIcon}
            onChange={({ target }) => handleChange(target.files)}
            accept="text/*, .docx, .doc " //
          />
          <Button
            type={BUTTON_NAME.AUDIO}
            icon={musicIcon}
            onChange={({ target }) => handleChange(target.files)}
            accept="audio/*" //  любые аудио файлы;
          />
        </div>
      </div>
    </>
  );
};

export default ButtonAddFile;
