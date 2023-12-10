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

import Button from '../../../ui/buttons/button/button';
import routesUrl from '../../../utils/routesData';
import Typography from '../../../ui/typography/typography';
import { TTemplateBot } from '../../../services/types/bot';

interface ITemplatePopup {
  template: TTemplateBot;
  onClick?: () => void;
}

interface IImage {
  [key: string]: JSX.Element;
}

const image: IImage = {
  'Бот автоответчик': <ImageAnswer className={styles.bot_template_image} />,
  'Доставка еды': <ImageFood className={styles.bot_template_image} />,
  'Демо бот': <ImageDemo className={styles.bot_template_image} />,
  Опрос: <ImagePoll className={styles.bot_template_image} />,
  'Лидогенерация/HR': <ImageLead className={styles.bot_template_image} />,
  'Онлайн школа/Вебинар': <ImageLearn className={styles.bot_template_image} />,
  'Закрытый клуб по под...': (
    <ImagePrivate className={styles.bot_template_image} />
  ),
  'Агентство по недвижимости': (
    <ImageReal className={styles.bot_template_image} />
  ),
  Развлечения: <ImageEntertain className={styles.bot_template_image} />,
  'Салон красоты': <ImageBeauty className={styles.bot_template_image} />,
  'Онлайн-покупки': <ImageCom className={styles.bot_template_image} />,
  'Вопрос/ответ': <ImageQuest className={styles.bot_template_image} />,
};

const BotTemplatePopup: FC<ITemplatePopup> = ({ template, onClick }) => {
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
    <div className={styles.bot_template}>
      <div>
        {image[template.title]}
        <div className={styles.bot_template_description}>
          <Typography
            tag="h2"
            fontFamily="secondary"
            className={styles.bot_template_title}
          >
            {template.title}
          </Typography>
          <Typography tag="p">{template.description}</Typography>
          <ul className={styles.bot_template_list}>
            {data.map((item, index) => (
              <li key={item + +index} className={styles.bot_template_item}>
                <Typography
                  tag="span"
                  className={styles.bot_template_item_index}
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

      <div className={styles.bot_template_buttons}>
        <button
          className={styles.bot_template_cancel}
          onClick={onClick}
          type="button"
        >
          Отмена
        </button>

        <div className={styles.bot_template_add_button}>
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
