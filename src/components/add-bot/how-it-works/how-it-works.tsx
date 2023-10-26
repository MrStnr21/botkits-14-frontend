import { FC, useState } from 'react';
import { ReactSVG } from 'react-svg';

import cn from 'classnames';

import stylesHowItWorks from './how-it-works.module.scss';

import ButtonInstruction from '../../../ui/buttons/button-instruction/button-instruction';

import ArrowIcon from '../../../images/icon/20x20/chevron/down.svg';
import FaqIcon from '../../../images/icon/add bot/tutorial.svg';
import VideoIcon from '../../../images/icon/add bot/video.svg';
import Typography from '../../../ui/typography/typography';

const HowItWorks: FC = (): JSX.Element => {
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
      <Typography tag="p" className={stylesHowItWorks.header}>
        Как это работает?
        <button
          onClick={() => setIsActive(!isActive)}
          className={arrowButtonCn}
          type="button"
        >
          <ReactSVG src={ArrowIcon} />
        </button>
      </Typography>
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
};

export default HowItWorks;
