import { FC, useState } from 'react';

import { useMediaQuery } from '@mui/material';
import styles from './how-to-mailing.module.scss';

import ButtonInstruction from '../../../ui/buttons/button-instruction/button-instruction';
import FaqIcon from '../../../images/icon/add bot/tutorial.svg';
import VideoIcon from '../../../images/icon/add bot/video.svg';
import Typography from '../../../ui/typography/typography';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';

const HowToMailing: FC = () => {
  const isMobile = useMediaQuery('(max-width: 860px)');
  const [buttonsVisible, toggleVisibility] = useState(true);

  const toggle = () => {
    toggleVisibility(!buttonsVisible);
  };
  return (
    <div className={styles.howIt}>
      <Typography
        tag="p"
        fontFamily="secondary"
        className={styles.howIt__header}
      >
        Как это работает?
      </Typography>
      {isMobile && (
        <button
          onClick={toggle}
          type="button"
          className={`${styles.howIt__hide} ${
            buttonsVisible ? '' : styles.howIt__hide_closed
          }`}
        >
          <ChevronIcon height={26} width={26} color="#BFC9D9" />
        </button>
      )}
      <div
        className={`${styles.howIt__buttons} ${
          buttonsVisible
            ? styles.howIt__buttons_visible
            : styles.howIt__buttons_hidden
        }`}
      >
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

export default HowToMailing;
