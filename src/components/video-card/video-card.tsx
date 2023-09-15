import React, { FC, useState } from 'react';

import stylesVideo from './video-card.module.scss';

interface IVideoElement {
  title: string;
  src: string; // ссылка на ютуб
  prewiew: string; // заставка
  size?: 's' | 'm' | 'x'; // размер окна заставки и видео
  hiddenRemoveButton?: boolean; // скрыть кнопку удаления компонента с видео
  hover?: boolean; // отобразить кнопку play
}

const VideoCard: FC<IVideoElement> = ({
  src,
  title,
  prewiew,
  size = 'l',
  hiddenRemoveButton,
  hover,
}): JSX.Element | null => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPlay, setIsPlay] = useState(false);

  function remove() {
    setIsVisible(false);
  }
  function play() {
    setIsPlay(true);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <>
      <div
        className={size === 'x' ? `${stylesVideo.flexWrapper}` : ''}
        onKeyDown={(ev) => {
          // слушаем кнопку Esc, чтобы закрыть видео
          if (ev.key === 'Escape') {
            setIsPlay(false);
          }
        }}
      >
        <div
          className={`${stylesVideo.container} ${stylesVideo[`size-${size}`]}`}
        >
          <img src={prewiew} alt="prewiew" className={stylesVideo.prewiew} />
          <button
            type="button"
            onClick={remove}
            className={stylesVideo.button__remove}
            aria-label="Удалить загруженное видео"
            hidden={hiddenRemoveButton}
          />

          <div
            className={`${stylesVideo.cover} ${hover && stylesVideo.hover} ${
              stylesVideo[`size-${size}`]
            }`}
          >
            <button
              type="button"
              onClick={play}
              className={stylesVideo.playButton}
              aria-label="Начать воспроизведение видео."
            />
          </div>
        </div>
        {hiddenRemoveButton && <p className={stylesVideo.caption}>{title}</p>}
      </div>
      {isPlay && (
        <div className={stylesVideo.video__box}>
          {/* в макете нет попапа с видео, кнопка примерная */}
          <button
            type="button"
            onClick={() => setIsPlay(false)}
            className={stylesVideo.button__close}
            aria-label="Закрыть видео"
          />
          <iframe
            className={stylesVideo.video__iframe}
            src={src}
            title={title}
            allow="
          accelerometer;
          autoplay;
          clipboard-write;
          encrypted-media;
          gyroscope;
          picture-in-picture;
          web-share"
          />
        </div>
      )}
    </>
  );
};

export default VideoCard;
