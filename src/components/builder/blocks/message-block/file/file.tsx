import { FC, useState } from 'react';
import styles from './file.module.scss';
// import createbot from '../../../../../images/prewiew/createbot.png';
import VideoCard from '../../../../video-card/video-card';
import { ReactComponent as DocImage } from '../../../../../images/icon/add content/doc-circle.svg';
import { ReactComponent as DocErrorImage } from '../../../../../images/icon/add content/doc-error.svg';
import { ReactComponent as PlayImage } from '../../../../../images/icon/add content/play-blue.svg';
import { sizeFormated } from '../../../../../utils/utils';

const getTime = (s: number) => {
  const minutes = String(Math.floor(s / 60));
  const seconds = String(Math.floor(s % 60));
  return `${minutes}:${seconds.length === 2 ? seconds : `0${seconds}`}`;
};

type TFileProps = {
  data?: File;
};

export type TUploadedDockProps = {
  name: string;
  size: number;
};

export type TUploadedPictureProps = {
  src: string;
};

export type TUploadedAudioProps = {
  src: string;
  name: string;
};

export type TUploadedVideoProps = {
  file: File | undefined;
};

const UploadedDock: FC<TUploadedDockProps> = ({ name, size }) => {
  const isRequired = size <= 1024 * 1024 * 10;
  const Icon = isRequired ? DocImage : DocErrorImage;
  return (
    <div className={`${styles.result} ${!isRequired && styles.result_error}`}>
      <Icon className={styles.result__icon} />
      <p className={styles.result__name}>{name}</p>
      <p className={styles.result__size}>{sizeFormated(size)}</p>
      <button
        type="button"
        aria-label="Удалить файл"
        className={styles.result__button}
      />
    </div>
  );
};

const UploadedVideo: FC<TUploadedVideoProps> = ({ file }) => {
  const src = URL.createObjectURL(file!);

  return (
    <VideoCard
      hover
      previewType="video"
      title="title"
      prewiew={src}
      src={src}
    />
  );
};

const UploadedPicture: FC<TUploadedPictureProps> = ({ src }) => {
  return (
    <VideoCard contentType="image" title="title" prewiew={src} src={src} />
  );
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
      <p className={styles.result__size}>{getTime(duration)}</p>
      <button
        type="button"
        aria-label="Удалить файл"
        className={styles.result__button}
      />
    </div>
  );
};

const File: FC<TFileProps> = ({ data }) => {
  const [file, setFile] = useState(data);

  return (
    <>
      <article />
      {file && file.type.includes('video') && <UploadedVideo file={file} />}
      {file && file.type.includes('image') && (
        <UploadedPicture src={URL.createObjectURL(file)} />
      )}
      {file && file.type.includes('text') && (
        <UploadedDock name={file.name} size={file.size} />
      )}
      {file && file.type.includes('audio') && (
        <UploadedAudio src={URL.createObjectURL(file)} name={file.name} />
      )}
      {/* Разметка ниже - для теста работоспособности, позже удалю */}
      <p>Инпут для проверки</p>
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files ? e.target.files[0] : data);
        }}
      />
    </>
  );
};

export default File;
