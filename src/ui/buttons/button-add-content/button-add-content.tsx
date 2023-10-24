// Mailing/Add content
// @TODO перенести в нужную папку, доделать стили, ДЛЯ ДОБАВЛЕНИЯ КОНТЕНТА В РАССЫЛКУ.. крупные кнопки с надписью
import { FC, useState } from 'react';

import stylesButtonAddContent from './button-add-content.module.scss';

import ConstructorIconBotton from '../constructor-icon-botton/constructor-icon-botton';

import videoIcon from '../../../images/icon/24x24/add content/video.svg';
import musicIcon from '../../../images/icon/24x24/add content/music.svg';
import imageIcon from '../../../images/icon/24x24/add content/image.svg';
import btnIcon from '../../../images/icon/24x24/add content/button.svg';
import Typography from '../../typography/typography';

// import Button from '../button/button';

import { BUTTON_NAME } from '../../../utils/constants';

const ButtonAddContent: FC = (): JSX.Element => {
  const [iconSelected, setIconSelected] = useState<BUTTON_NAME>();

  const addContent = (value: BUTTON_NAME) => {
    if (value === iconSelected) {
      // если кликаем на выбранную иконку второй раз, то она переходит в дефолт active=false
      setIconSelected(undefined);
      // @todo  добавить функцию - закрыть соответсвующий value popup/block..
    } else {
      setIconSelected(value);
      // @todo  добавить функцию открыть соответсвующий value popup/block..блок загрузить файл или вариант кнопки
    }
  };

  return (
    <section
      aria-label="Добавить контент в рассылку"
      className={stylesButtonAddContent.wrapper}
    >
      {/* @TODO  add style for h2 */}
      <Typography tag="h2" className={stylesButtonAddContent.header}>
        Добавить
      </Typography>
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
    </section>
  );
};

export default ButtonAddContent;
