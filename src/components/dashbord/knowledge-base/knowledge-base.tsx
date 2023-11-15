import { FC } from 'react';

import { useMediaQuery } from '@mui/material';

import stylesKnowledgeBase from './knowledge-base.module.scss';

import prew1 from '../../../images/prewiew/prew1.png';
import prew2 from '../../../images/prewiew/prew2.png';
import prew3 from '../../../images/prewiew/prew3.png';

import VideoCard from '../../video-card/video-card';

import links from './kb-data';
import Typography from '../../../ui/typography/typography';

import {
  URL_YOUTUBE_CONNECT_CHATBOT,
  URL_YOUTUBE_MAILING,
  URL_YOUTUBE_BLOCK_SCHEMES,
  URL_HELP,
} from '../../../utils/config';

const KnowledgeBase: FC = (): JSX.Element => {
  const matches = useMediaQuery('(max-width: 560px)');

  return (
    <section className={stylesKnowledgeBase.wrapper}>
      <div className={stylesKnowledgeBase.video}>
        <Typography
          tag="h2"
          fontFamily="secondary"
          className={stylesKnowledgeBase.video__header}
        >
          С чего начать?
        </Typography>
        <div className={stylesKnowledgeBase.video__container}>
          <VideoCard
            src={URL_YOUTUBE_CONNECT_CHATBOT!}
            title="Подключение и основные параметры"
            prewiew={prew1}
            size={matches ? 'x' : 's'}
            hiddenRemoveButton
            hover
          />
          <VideoCard
            src={URL_YOUTUBE_MAILING!}
            title="Настраиваем простую рассылку"
            prewiew={prew2}
            size={matches ? 'x' : 's'}
            hiddenRemoveButton
            hover
          />
          <VideoCard
            src={URL_YOUTUBE_BLOCK_SCHEMES!}
            title="Начало работы с блок&#8209;схемами"
            prewiew={prew3}
            size={matches ? 'x' : 's'}
            hiddenRemoveButton
            hover
          />
        </div>
      </div>

      <div className={stylesKnowledgeBase.base}>
        <a
          href={URL_HELP}
          className={stylesKnowledgeBase.base__header}
          target="_blank"
          rel="noopener noreferrer"
        >
          База знаний
        </a>
        <Typography tag="p" className={stylesKnowledgeBase.base__text}>
          Узнай, как создать чат бота. Примеры и описание опций сервиса!
        </Typography>
        <nav>
          <ul className={stylesKnowledgeBase.base__list}>
            {links.map((item, index) => (
              <li
                className={stylesKnowledgeBase.base__item}
                key={item.text + +index}
              >
                <a
                  href={item.link}
                  target="_blank"
                  className={stylesKnowledgeBase.base__link}
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default KnowledgeBase;
