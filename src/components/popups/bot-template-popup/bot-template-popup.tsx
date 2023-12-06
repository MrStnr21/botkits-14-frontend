import { FC } from 'react';
import { useNavigate } from 'react-router';

import stylesBotTemplate from './bot-template-popup.module.scss';

import { ReactComponent as ImageAnswer } from '../../../images/icon/template/answering machine.svg';
import { ReactComponent as ImageEntertain } from '../../../images/icon/template/entertainment.svg';
import { ReactComponent as ImageLead } from '../../../images/icon/template/lead generation.svg';
import { ReactComponent as ImagePrivate } from '../../../images/icon/template/private club.svg';
import { ReactComponent as ImageFood } from '../../../images/icon/template/food delivery.svg';
import { ReactComponent as ImageLearn } from '../../../images/icon/template/e-learning.svg';
import { ReactComponent as ImageReal } from '../../../images/icon/template/real estate.svg';
import { ReactComponent as ImageCom } from '../../../images/icon/template/e-commerce.svg';
import { ReactComponent as ImageQuest } from '../../../images/icon/template/question.svg';
import { ReactComponent as ImageDemo } from '../../../images/icon/template/demo bot.svg';
import { ReactComponent as ImageBeauty } from '../../../images/icon/template/beauty.svg';
import { ReactComponent as ImagePoll } from '../../../images/icon/template/poll.svg';

import Button from '../../../ui/buttons/button/button';
import routesUrl from '../../../utils/routesData';
import Typography from '../../../ui/typography/typography';

interface IBotTemplate {
  title: string;
  description: string;
  id: string;
  onClick?: () => void;
}

interface IImage {
  [key: string]: JSX.Element;
}

const image: IImage = {
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

const BotTemplatePopup: FC<IBotTemplate> = ({
  title,
  description,
  id,
  onClick,
}): JSX.Element | null => {
  const data = [
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
  ];
  const history = useNavigate();
  const addBot = (templateId: string, templateTitle: string) => {
    history(
      `/${routesUrl.addBot}?template=${templateId}&title=${templateTitle}`
    );
  };

  return (
    <div className={stylesBotTemplate.bot_template}>
      <div>
        {image[title]}
        <div className={stylesBotTemplate.bot_template_description}>
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={stylesBotTemplate.bot_template_title}
          >
            {title}
          </Typography>
          <Typography tag="p">{description}</Typography>
          <ul className={stylesBotTemplate.bot_template_list}>
            {data.map((item, index) => (
              <li
                key={item + +index}
                className={stylesBotTemplate.bot_template_item}
              >
                <Typography
                  tag="span"
                  className={stylesBotTemplate.bot_template_item_index}
                >
                  {index + 1}
                  {'>'}
                </Typography>
                <Typography tag="span">{item}</Typography>
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
            onClick={() => addBot(id, title)}
            size="large"
            variant="default"
            color="green"
            buttonHtmlType="submit"
          >
            Добавить бота
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BotTemplatePopup;
