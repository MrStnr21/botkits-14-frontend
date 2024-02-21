import { FC } from 'react';
import { useNavigate } from 'react-router';

import styles from './bot-template-popup.module.scss';

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

import { TBotTemplate } from '../../../services/types/bot';

import Button from '../../../ui/buttons/button/button';
import routesUrl from '../../../utils/routesData';
import Typography from '../../../ui/typography/typography';

interface IBotTemplate {
  template: TBotTemplate;
  onClick?: () => void;
}

interface IImage {
  [key: string]: JSX.Element;
}

const image: IImage = {
  'Бот автоответчик': <ImageAnswer className={styles.image} />,
  'Доставка еды': <ImageFood className={styles.image} />,
  'Демо бот': <ImageDemo className={styles.image} />,
  Опрос: <ImagePoll className={styles.image} />,
  'Лидогенерация/HR ререререре...': <ImageLead className={styles.image} />,
  'Онлайн школа/Вебинар': <ImageLearn className={styles.image} />,
  'Закрытый клуб по под...': <ImagePrivate className={styles.image} />,
  'Агентство по недвижимости': <ImageReal className={styles.image} />,
  Развлечения: <ImageEntertain className={styles.image} />,
  'Салон красоты': <ImageBeauty className={styles.image} />,
  'Онлайн-покупки': <ImageCom className={styles.image} />,
  'Вопрос/ответ': <ImageQuest className={styles.image} />,
};

const BotTemplatePopup: FC<IBotTemplate> = ({ template, onClick }) => {
  const descriptionList = [
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
  ];
  const navigate = useNavigate();
  const addBot = (templateId: string, templateTitle: string) => {
    navigate(
      `/${routesUrl.addBot}?template=${templateId}&title=${templateTitle}`
    );
  };

  return (
    <div className={styles.bot_template}>
      <div>
        {image[template.title] || (
          <img
            src={template.icon}
            alt="иконка бота"
            className={styles.template_image}
          />
        )}
        <div className={styles.description}>
          <Typography tag="h2" fontFamily="secondary" className={styles.title}>
            {template.title}
          </Typography>
          <Typography tag="p">{template.description}</Typography>
          <ul className={styles.list}>
            {descriptionList.map((description, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <li key={index} className={styles.item}>
                <Typography tag="span" className={styles.item_index}>
                  {index + 1}
                  {'>'}
                </Typography>
                <Typography tag="span">{description}</Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.buttons}>
        <button className={styles.cancel} onClick={onClick} type="button">
          Отмена
        </button>

        <div className={styles.add_button}>
          <Button
            // eslint-disable-next-line no-underscore-dangle
            onClick={() => addBot(template._id, template.title)}
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
