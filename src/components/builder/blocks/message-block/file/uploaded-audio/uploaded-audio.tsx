import { FC, useState } from 'react';
import styles from '../file.module.scss';
import { getTimeMS } from '../../../../utils';
import { ReactComponent as PlayImage } from '../../../../../../images/icon/add content/play-blue.svg';

export type TUploadedAudioProps = {
  src: string;
  name: string;
};

const UploadedAudio: FC<TUploadedAudioProps> = ({ src, name }) => {
  const audio = new Audio(src);
  const [duration, setDuration] = useState<number>(audio.duration);
  audio.onloadedmetadata = () => {
    setDuration(audio.duration);
  };
  audio.preload = 'metadata';
  const onClick = () => {
    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };

  return (
    <div className={styles.result}>
      <PlayImage
        onClick={onClick}
        className={`${styles.result__icon} ${styles.result__icon_interactive}`}
      />
      <p className={styles.result__name}>{name}</p>
      <p className={styles.result__size}>{getTimeMS(duration)}</p>
      <button
        type="button"
        aria-label="Удалить файл"
        className={styles.result__button}
      />
    </div>
  );
};

export default UploadedAudio;
