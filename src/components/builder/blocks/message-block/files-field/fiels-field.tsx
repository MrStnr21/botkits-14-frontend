import React, { FC, useState, useCallback } from 'react';

import styles from './files-field.module.scss';

import ConstructorIconBotton from '../../../../../ui/buttons/constructor-icon-botton/constructor-icon-botton';

import videoIcon from '../../../../../images/icon/24x24/add content/video.svg';
import musicIcon from '../../../../../images/icon/24x24/add content/music.svg';
import imageIcon from '../../../../../images/icon/24x24/add content/image.svg';
import fileIcon from '../../../../../images/icon/24x24/add content/file.svg';

import { BUTTON_NAME } from '../../../../../utils/constants';

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
        className={styles.download__input}
        type="file"
        onChange={onChange}
        id={type}
        name={type}
        hidden
        accept={accept}
      />
      <label className={styles.download__label} htmlFor={type}>
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

const FielsField: FC = (): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Дополните контентом</h3>
      <div className={styles.inputsBox}>
        <Button
          type={BUTTON_NAME.IMAGE}
          icon={imageIcon}
          onChange={() => {}}
          accept="image/*" // любые графические файлы;
        />
        <Button
          type={BUTTON_NAME.VIDEO}
          icon={videoIcon}
          onChange={() => {}}
          accept="video/*" // любые видеофайлы;
        />
        <Button
          type={BUTTON_NAME.FILE}
          icon={fileIcon}
          onChange={() => {}}
          accept="text/*, .docx, .doc " //
        />
        <Button
          type={BUTTON_NAME.AUDIO}
          icon={musicIcon}
          onChange={() => {}}
          accept="audio/*" //  любые аудио файлы;
        />
      </div>
    </div>
  );
};

export default FielsField;
