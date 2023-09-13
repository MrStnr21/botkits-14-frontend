// to do: ButtonAddFile
// https://trello.com/c/Ma7RILKa
// верхий компонент
import React, { FC, useState, useCallback } from 'react';
import ConstructorIconBotton from '../constructor-icon-botton/constructor-icon-botton';
import videoIcon from '../../../images/icon/24x24/add content/video.svg';
import musicIcon from '../../../images/icon/24x24/add content/music.svg';
import imageIcon from '../../../images/icon/24x24/add content/image.svg';
// import fileIcon from '../../../images/icon/24x24/add content/file.svg'; // Это скрепка
import Button from '../button/button';
import stylesButtonAddFile from './button-add-file.module.scss';
import { BUTTON_NAME } from '../../../utils/constants';
// import DownloadFile from '../../inputs/add-file/add-file'; // он откроется при клике на иконку?

const ButtonAddFile: FC = () => {
  const [iconsSelected, setIconsSelected] = useState<Array<BUTTON_NAME>>([]);
  let changeArr: [] | Array<BUTTON_NAME>;

  const checkActiveIcon = useCallback(
    (iconValue: BUTTON_NAME) => {
      return iconsSelected.some((item) => item === iconValue);
    },
    [iconsSelected]
  );

  const openDownloadFile = (value: BUTTON_NAME) => {
    // если кликаем на выбранную иконку второй раз, то она переходит в дефолт active=false..это для поиграться
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

  // Для элемента Button отдельная, потому что не уверена, что стоит его переделывать
  const addBtn = () => {
    if (checkActiveIcon(BUTTON_NAME.BTN)) {
      changeArr = iconsSelected.filter((item) => {
        return item !== BUTTON_NAME.BTN;
      });
      setIconsSelected(changeArr);
    } else {
      setIconsSelected([...iconsSelected, BUTTON_NAME.BTN]);
    }
  };

  return (
    <div className={stylesButtonAddFile.wrapper}>
      <ConstructorIconBotton
        value={BUTTON_NAME.VIDEO}
        active={checkActiveIcon(BUTTON_NAME.VIDEO)}
        onClick={openDownloadFile}
        icon={videoIcon}
      />
      <ConstructorIconBotton
        value={BUTTON_NAME.AUDIO}
        active={checkActiveIcon(BUTTON_NAME.AUDIO)}
        onClick={openDownloadFile}
        icon={musicIcon}
      />
      <ConstructorIconBotton
        value={BUTTON_NAME.IMAGE}
        active={checkActiveIcon(BUTTON_NAME.IMAGE)}
        onClick={openDownloadFile}
        icon={imageIcon}
      />

      {/*   СКРЕПКА, у меня нет в UI, в макете воронки будет, тут для примера */}
      {/* <ConstructorIconBotton
        value={BUTTON_NAME.FILE}
        active={checkActiveIcon(BUTTON_NAME.FILE)}
        onClick={openDownloadFile}
        icon={fileIcon}
      /> */}

      <Button
        color="light-grey"
        variant="default"
        active={checkActiveIcon(BUTTON_NAME.BTN)}
        // @TODO будет другая функция
        onClick={() => addBtn()}
      >
        <p className={stylesButtonAddFile.btn__text}>Добавить кнопку</p>
      </Button>
    </div>
  );
};

export default ButtonAddFile;
