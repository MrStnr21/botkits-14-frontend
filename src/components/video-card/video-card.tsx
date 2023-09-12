import { FC, useState } from 'react';

import stylesVideo from './video-card.module.scss';

interface IVideoElement {
  // для фрейма видео
  title: string;
  // ссылка на ютуб
  src: string;
  // заставка
  prewiew: string;
  // размер окна заставки и видео
  size?: 'm' | 's';
  // отображения кнопки удаления компонента с видео
  hiddenRemoveButton?: boolean;
  // для отображения кнопки play
  hover?: boolean;
}

const VideoCard: FC<IVideoElement> = ({
  src,
  title,
  prewiew,
  size = 'm',
  hiddenRemoveButton,
  hover,
}): JSX.Element => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlay, setIsPlay] = useState(false);

  function remove() {
    setIsVisible(false);
  }
  function play() {
    setIsPlay(true);
  }

  return (
    <div>
      {isVisible && (
        <div
          className={`${stylesVideo.container} ${stylesVideo[`size-${size}`]}`}
        >
          <img src={prewiew} alt="prewiew" className={stylesVideo.prewiew} />
          <button
            type="button"
            onClick={remove}
            className={stylesVideo.closeButton}
            aria-label="Убрать блок с видео"
            hidden={hiddenRemoveButton}
          />

          <div className={`${stylesVideo.cover} ${hover && stylesVideo.hover}`}>
            <button
              type="button"
              onClick={play}
              className={stylesVideo.playButton}
              aria-label="Начать воспроизведение видео."
            />
            <span className={stylesVideo.visuallyHidden}>
              Создай чат-бота за 5 минут
            </span>
          </div>
          {isPlay && (
            <iframe
              className={stylesVideo.video}
              src={src}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default VideoCard;
