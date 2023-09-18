import { FC } from 'react';
import { useNavigate } from 'react-router';

import stylesBotTemplate from './bot-template.module.scss';

import { ReactComponent as ImageAnswer } from '../../images/icon/template/answering machine.svg';
import { ReactComponent as ImageEntertain } from '../../images/icon/template/entertainment.svg';
import { ReactComponent as ImageLead } from '../../images/icon/template/lead generation.svg';
import { ReactComponent as ImagePrivate } from '../../images/icon/template/private club.svg';
import { ReactComponent as ImageFood } from '../../images/icon/template/food delivery.svg';
import { ReactComponent as ImageLearn } from '../../images/icon/template/e-learning.svg';
import { ReactComponent as ImageReal } from '../../images/icon/template/real estate.svg';
import { ReactComponent as ImageCom } from '../../images/icon/template/e-commerce.svg';
import { ReactComponent as ImageQuest } from '../../images/icon/template/question.svg';
import { ReactComponent as ImageDemo } from '../../images/icon/template/demo bot.svg';
import { ReactComponent as ImageBeauty } from '../../images/icon/template/beauty.svg';
import { ReactComponent as Close } from '../../images/icon/24x24/common/close.svg';
import { ReactComponent as ImagePoll } from '../../images/icon/template/poll.svg';

import Button from '../buttons/button/button';

interface IBotTemplate {
  title: string;
  onClick?: () => void;
}

const image: any = {
  'Бот автоответчик': (
    <ImageAnswer className={stylesBotTemplate.bot_template_image} />
  ),
  'Доставка еды': (
    <ImageFood className={stylesBotTemplate.bot_template_image} />
  ),
  'Демо бот': <ImageDemo className={stylesBotTemplate.bot_template_image} />,
  Опрос: <ImagePoll className={stylesBotTemplate.bot_template_image} />,
  'Лидогенерация/HR ререререре...': (
    <ImageLead className={stylesBotTemplate.bot_template_image} />
  ),
  'Онлайн школа/Вебинар': (
    <ImageLearn className={stylesBotTemplate.bot_template_image} />
  ),
  'Закрытый клуб по под...': (
    <ImagePrivate className={stylesBotTemplate.bot_template_image} />
  ),
  'Агентство по недвижимости': (
    <ImageReal className={stylesBotTemplate.bot_template_image} />
  ),
  Развлечения: (
    <ImageEntertain className={stylesBotTemplate.bot_template_image} />
  ),
  'Салон красоты': (
    <ImageBeauty className={stylesBotTemplate.bot_template_image} />
  ),
  'Онлайн-покупки': (
    <ImageCom className={stylesBotTemplate.bot_template_image} />
  ),
  'Вопрос/ответ': (
    <ImageQuest className={stylesBotTemplate.bot_template_image} />
  ),
};

const BotTemplate: FC<IBotTemplate> = ({
  title,
  onClick = () => console.log(1),
}): JSX.Element | null => {
  const data = [
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
  ];
  const history = useNavigate();
  const addBot = () => {
    // добавить подключение к редаксу
    history('/add-bot');
  };

  return (
    <div className={stylesBotTemplate.bot_template}>
      <div>
        {image[title]}
        <div className={stylesBotTemplate.bot_template_description}>
          <h2 className={stylesBotTemplate.bot_template_title}>{title}</h2>
          <p className={stylesBotTemplate.bot_template_text}>
            Бот ответит стандартным сообщением на запрос от человека. Подходит
            для всех мессенджеров. Шаблон возможно изменить под ваши цели.
          </p>
          <ul className={stylesBotTemplate.bot_template_list}>
            {data.map((item, index) => (
              <li
                key={item + +index}
                className={stylesBotTemplate.bot_template_item}
              >
                <span className={stylesBotTemplate.bot_template_item_index}>
                  {index + 1}
                  {'>'}
                </span>
                <span className={stylesBotTemplate.bot_template_item_text}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={stylesBotTemplate.bot_template_buttons}>
        <button
          className={stylesBotTemplate.bot_template_cancel}
          onClick={onClick}
          type="button"
        >
          Отмена
        </button>

        <div className={stylesBotTemplate.bot_template_add_button}>
          <Button
            onClick={addBot}
            size="large"
            variant="default"
            color="green"
            buttonHtmlType="submit"
          >
            Добавить бота
          </Button>
        </div>
      </div>

      <button
        className={stylesBotTemplate.bot_template_close}
        onClick={onClick}
        type="button"
      >
        <Close />
      </button>
    </div>
  );
};

export default BotTemplate;
