import { FC } from 'react';

import { useMediaQuery } from '@mui/material';

import stylesKnowledgeBase from './knowledge-base.module.scss';

import prew1 from '../../../images/prewiew/prew1.png';
import prew2 from '../../../images/prewiew/prew2.png';
import prew3 from '../../../images/prewiew/prew3.png';

import VideoCard from '../../video-card/video-card';

import links from './kb-data';

const KnowledgeBase: FC = (): JSX.Element => {
  const matches = useMediaQuery('(max-width: 560px)');

  return (
    <section className={stylesKnowledgeBase.wrapper}>
      <div className={stylesKnowledgeBase.video}>
        <h2 className={stylesKnowledgeBase.video__header}>С чего начать?</h2>
        <div className={stylesKnowledgeBase.video__container}>
          <VideoCard
            src="https://www.youtube.com/embed/FKOn5DfpJDA"
            title="Подключение и основные параметры"
            prewiew={prew1}
            size={matches ? 'x' : 's'}
            hiddenRemoveButton
            hover
          />
          <VideoCard
            src="https://www.youtube.com/embed/FKOn5DfpJDA"
            title="Настраиваем простую рассылку"
            prewiew={prew2}
            size={matches ? 'x' : 's'}
            hiddenRemoveButton
            hover
          />
          <VideoCard
            src="https://www.youtube.com/embed/FKOn5DfpJDA"
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
          href="https://botkits.ru/help/ "
          className={stylesKnowledgeBase.base__header}
          target="_blank"
          rel="noopener noreferrer"
        >
          База знаний
        </a>
        <p className={stylesKnowledgeBase.base__text}>
          Узнай, как создать чат бота. Примеры и описание опций сервиса!
        </p>
        <nav>
          <ul className={stylesKnowledgeBase.base__list}>
            {links.map((item, index) => (
              <li
                className={stylesKnowledgeBase.base__item}
                key={item.text + index.toString()}
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
