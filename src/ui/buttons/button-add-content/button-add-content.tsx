/* eslint-disable react/no-children-prop */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Mailing/Add content
// @TODO перенести в нужную папку, доделать стили, ДЛЯ ДОБАВЛЕНИЯ КОНТЕНТА В РАССЫЛКУ.. крупные кнопки с надписью
import { FC, useState } from 'react';

import stylesButtonAddContent from './button-add-content.module.scss';

import ConstructorIconBotton from '../constructor-icon-botton/constructor-icon-botton';

import videoIcon from '../../../images/icon/24x24/add content/video.svg';
import musicIcon from '../../../images/icon/24x24/add content/music.svg';
import imageIcon from '../../../images/icon/24x24/add content/image.svg';
import btnIcon from '../../../images/icon/24x24/add content/button.svg';

// import Button from '../button/button';

import { BUTTON_NAME, SIZE_INPUT } from '../../../utils/constants';
import Typography from '../../typography/typography';
import DownloadFile from '../../inputs/add-file/add-file';
import ConstructorAddButton from '../constructor-add-button/constructor-add-button';
import InputDialogsues from '../../inputs/input-dialogues/input-dialogues';

const ButtonAddContent: FC = (): JSX.Element => {
  const [iconSelected, setIconSelected] = useState<BUTTON_NAME>();
  const [addFileInput, setAddFileInput] = useState(false);
  const [buttonInput, setButtonInput] = useState(false);
  const [horizontal, setHorizontal] = useState(false);
  const [vertical, setVertical] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const addContent = (value: BUTTON_NAME) => {
    if (value === iconSelected) {
      setIconSelected(undefined);
      setButtonInput(false);
      setAddFileInput(false);
    } else {
      setIconSelected(value);
      setButtonInput(value === BUTTON_NAME.BTN);
      setAddFileInput(value !== BUTTON_NAME.BTN);
    }
  };

  const toggleVertical = () => {
    setHorizontal(false);
    setVertical(!vertical);
  };

  const toggleHorizontal = () => {
    setHorizontal(!horizontal);
    setVertical(false);
  };

  return (
    <section
      aria-label="Добавить контент в рассылку"
      className={stylesButtonAddContent.wrapper}
    >
      {/* @TODO  add style for h2 */}
      {/* <Typography tag="h2" className={stylesButtonAddContent.header}>
        Добавить
      </Typography> */}
      <div className={stylesButtonAddContent.butbox}>
        <ConstructorIconBotton
          text={BUTTON_NAME.IMAGE}
          value={BUTTON_NAME.IMAGE}
          active={iconSelected === BUTTON_NAME.IMAGE}
          onClick={addContent}
          icon={imageIcon}
          styleBtn="mailing"
        />
        <ConstructorIconBotton
          text={BUTTON_NAME.VIDEO}
          value={BUTTON_NAME.VIDEO}
          active={iconSelected === BUTTON_NAME.VIDEO}
          onClick={addContent}
          icon={videoIcon}
          styleBtn="mailing"
        />
        <ConstructorIconBotton
          text={BUTTON_NAME.AUDIO}
          value={BUTTON_NAME.AUDIO}
          active={iconSelected === BUTTON_NAME.AUDIO}
          onClick={addContent}
          icon={musicIcon}
          styleBtn="mailing"
        />
        <ConstructorIconBotton
          text={BUTTON_NAME.BTN}
          value={BUTTON_NAME.BTN}
          active={iconSelected === BUTTON_NAME.BTN}
          onClick={addContent}
          icon={btnIcon}
          styleBtn="mailing"
        />
      </div>
      <div className={stylesButtonAddContent.inputs}>
        {addFileInput && !buttonInput && <DownloadFile size={SIZE_INPUT.L} />}
        {buttonInput && !addFileInput && (
          <div className={stylesButtonAddContent.inputs__wrapper}>
            <ConstructorAddButton
              onClick={toggleHorizontal}
              icon="horizontal inline"
            >
              Горизонтальный инлайн
            </ConstructorAddButton>
            {horizontal && !vertical && (
              <div className={stylesButtonAddContent.inputs__input}>
                <InputDialogsues
                  onChange={() => setInputValue}
                  placeholder="Введите название"
                />
              </div>
            )}
            <ConstructorAddButton
              onClick={toggleVertical}
              icon="vertical inline"
            >
              Вертикальный инлайн
            </ConstructorAddButton>
            {vertical && !horizontal && (
              <div className={stylesButtonAddContent.inputs__input}>
                <InputDialogsues
                  onChange={() => setInputValue}
                  placeholder="Введите название"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default ButtonAddContent;
