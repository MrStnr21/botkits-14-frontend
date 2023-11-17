import { FC } from 'react';

import styles from './how-to-mailing.module.scss';

import ButtonInstruction from '../../../ui/buttons/button-instruction/button-instruction';
import FaqIcon from '../../../images/icon/add bot/tutorial.svg';
import VideoIcon from '../../../images/icon/add bot/video.svg';
import Typography from '../../../ui/typography/typography';

const HowToMailing: FC = () => {
  return (
    <div className={styles.howIt}>
      <Typography
        tag="p"
        fontFamily="secondary"
        className={styles.howIt__header}
      >
        Как это работает?
      </Typography>
      <div className={styles.howIt__buttons}>
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
