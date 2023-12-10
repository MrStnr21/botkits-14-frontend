import { FC, useState } from 'react';
import { createPortal } from 'react-dom';

import stylesVideo from './video-card.module.scss';
import Typography from '../../ui/typography/typography';

interface IVideoElement {
  title: string;
  /**
   * ссылка на видео/изображение
   */
  src: string;
  /**
   * тип превью изображение/видео
   */
  previewType?: 'image' | 'video';
  /**
   * тип открываемого контента при клике по превью
   */
  contentType?: 'image' | 'video';
  /**
   * prewiew src
   */
  prewiew: string; // заставка
  /**
   * размер элемента-превью
   * @option s: `172px/96px`
   * @option m: `264px/132px`
   * @option x: `130px/72px`
   * @option sx: `150px/83px`
   */
  size?: 's' | 'm' | 'x' | 'sx';
  /**
   * скрыть кнопку удаления компонента с видео
   */
  hiddenRemoveButton?: boolean;
  /**
   * отобразить кнопку play
   */
  hover?: boolean;
  /**
   * функция будет вызвана при клике по кнопке удаления
   */
  onRemove?: () => void;
}

/**
 * Компонент для создания медиа-карточек с видео или изображением
 * @example
 * <VideoCard
      contentType="image"
      title="title"
      size={isMobile ? 'sx' : 'm'}
      prewiew={src}
      src={src}
      onRemove={onRemove}
    />
 */
const VideoCard: FC<IVideoElement> = ({
  src,
  title,
  prewiew,
  size = 'm',
  hiddenRemoveButton,
  hover,
  previewType = 'image',
  contentType = 'video',
  onRemove,
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
          {previewType === 'image' && (
            <img src={prewiew} alt="prewiew" className={stylesVideo.prewiew} />
          )}
          {previewType === 'video' && (
            <video src={src} className={stylesVideo.prewiew}>
              <track
                src="captions_en.vtt"
                kind="captions"
                srcLang="en"
                label="english_captions"
              />
            </video>
          )}
          <button
            type="button"
            onClick={onRemove || remove}
            className={stylesVideo.button__remove}
            aria-label="Удалить загруженное видео"
            hidden={hiddenRemoveButton}
          />

          {contentType === 'video' && (
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
          )}
          {contentType === 'image' && (
            <div className={stylesVideo.cover_image} />
          )}
        </div>
        {hiddenRemoveButton && (
          <Typography tag="p" className={stylesVideo.caption}>
            {title}
          </Typography>
        )}
      </div>
      {isPlay &&
        createPortal(
          <div className={stylesVideo.video__box}>
            {/* в макете нет попапа с видео, кнопка примерная */}
            <button
              type="button"
              onClick={() => setIsPlay(false)}
              className={stylesVideo.button__close}
              aria-label="Закрыть видео"
            />
            {contentType === 'video' && (
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
            )}
          </div>,
          document.body
        )}
    </>
  );
};

export default VideoCard;
