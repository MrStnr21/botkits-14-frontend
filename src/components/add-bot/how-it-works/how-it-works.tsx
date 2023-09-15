// to do: HowItWorks
// https://trello.com/c/b7bD8SYw/26-%D0%B8%D0%BD%D1%81%D1%82%D1%80%D1%83%D0%BA%D1%86%D0%B8%D1%8F

import { useState } from 'react';
import { ReactSVG } from 'react-svg';
import cn from 'classnames';

import ButtonInstruction from '../../../ui/buttons/button-instruction/button-instruction';

import ArrowIcon from '../../../images/icon/20x20/chevron/down.svg';
import FaqIcon from '../../../images/icon/add bot/tutorial.svg';
import VideoIcon from '../../../images/icon/add bot/video.svg';

import stylesHowItWorks from './how-it-works.module.scss';

export default function HowItWorks() {
  const [isActive, setIsActive] = useState(true);

  const arrowButtonCn = cn(
    stylesHowItWorks.arrow_button,
    isActive && stylesHowItWorks.arrow_button_active
  );

  const buttonsContainerCn = cn(
    stylesHowItWorks.buttons_container,
    isActive && stylesHowItWorks.buttons_container_active
  );

  return (
    <div className={stylesHowItWorks.container}>
      <p className={stylesHowItWorks.header}>
        Как это работает?
        <button
          onClick={() => setIsActive(!isActive)}
          className={arrowButtonCn}
          type="button"
        >
          <ReactSVG src={ArrowIcon} />
        </button>
      </p>
      <div className={buttonsContainerCn}>
        <ButtonInstruction url="#" icon={FaqIcon}>
          Пошаговая инструкция
        </ButtonInstruction>
        <ButtonInstruction url="#" icon={VideoIcon}>
          Видео
        </ButtonInstruction>
      </div>
    </div>
  );
}
