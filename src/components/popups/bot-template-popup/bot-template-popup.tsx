import { FC, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

import styles from './bot-template-popup.module.scss';

import { TBotTemplate } from '../../../services/types/bot';

import Button from '../../../ui/buttons/button/button';
import routesUrl from '../../../utils/routesData';
import Typography from '../../../ui/typography/typography';

interface IBotTemplate {
  template: TBotTemplate;
  onClick?: () => void;
}

const BotTemplatePopup: FC<IBotTemplate> = ({ template, onClick }) => {
  const descriptionList = [
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
    'Что настроено в шаблоне',
  ];
  const navigate = useNavigate();
  const [image, setImage] = useState<string>('');
  const addBot = (templateId: string, templateTitle: string) => {
    navigate(
      `/${routesUrl.addBot}?template=${templateId}&title=${templateTitle}`
    );
  };

  const importImage = async () => {
    try {
      let imageModule;
      if (template.icon?.includes('http')) {
        imageModule = template.icon;
        return imageModule;
      }
      console.log(template.icon);
      imageModule = await import(
        `../../../images/icon/template/${template.icon}.svg`
      );
      return imageModule.default;
    } catch (error) {
      console.log(error);
      return 'null';
    }
  };

  useEffect(() => {
    if (template.icon) {
      importImage().then((importedImage) => {
        console.log(importedImage);
        setImage(importedImage);
      });
    }
  }, [template.icon]);

  return (
    <div className={styles.bot_template}>
      <div>
        <img src={image} alt="иконка бота" className={styles.template_image} />
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
