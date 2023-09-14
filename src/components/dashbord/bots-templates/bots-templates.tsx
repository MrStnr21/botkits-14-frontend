import React, { FC } from 'react';
import stylesTemplates from './bots-templates.module.scss';

const Template: FC<{ name: string; fileName: string }> = ({
  name,
  fileName,
}) => {
  const click = () => {
    console.log('click');
  };

  const importImage = async () => {
    try {
      const imageModule = await import(
        `../../../images/icon/template/${fileName}.svg`
      );
      return imageModule.default;
    } catch (error) {
      console.error(`Error importing image for ${fileName}:`, error);
      return null;
    }
  };

  const [image, setImage] = React.useState<string | null>(null);

  React.useEffect(() => {
    importImage().then((importedImage) => {
      setImage(importedImage);
    });
  }, [fileName]);

  return (
    <li className={stylesTemplates.item}>
      <div className={stylesTemplates.wrapper_button}>
        {image && (
          <img className={stylesTemplates.button} src={image} alt="Иконка" />
        )}

        <button
          type="button"
          onClick={click}
          className={stylesTemplates.button_plus}
          aria-label="xs"
        />
      </div>
      <p className={stylesTemplates.name_template}>{name}</p>
    </li>
  );
};

const Templates: FC = (): JSX.Element => {
  const data = {
    names_templates: [
      'Бот автоответчик',
      'Доставка еды',
      'Демо бот',
      'Опрос',
      'Лидогенерация/HR ререререре...',
      'Онлайн школа/Вебинар',
      'Закрытый клуб по под...',
      'Агентство по недвижимости',
      'Развлечения',
      'Салон красоты',
      'Онлайн-покупки',
      'Вопрос/ответ',
    ],
    names_files: [
      'answering machine',
      'food delivery',
      'demo bot',
      'poll',
      'lead generation',
      'e-learning',
      'private club',
      'real estate',
      'entertainment',
      'beauty',
      'e-commerce',
      'question',
    ],
  };
  const [isExpanded, setIsExpanded] = React.useState(false);
  const displayedTemplates = isExpanded
    ? data.names_templates
    : data.names_templates.slice(0, 6);
  return (
    <div className={stylesTemplates.container}>
      <div className={stylesTemplates.header_wrapper}>
        <h2 className={stylesTemplates.title}>Шаблоны</h2>
        <div className={stylesTemplates.accordion_wrapper}>
          <button
            className={stylesTemplates.accordion_button}
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="xs"
          >
            Все шаблоны
          </button>

          <button
            className={`${stylesTemplates.accordion_ico_plus} ${
              isExpanded ? stylesTemplates.accordion_ico_minus : ''
            }`}
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            aria-label="xs"
          />
        </div>
      </div>
      <ul
        className={`${stylesTemplates.list} ${
          !isExpanded ? stylesTemplates.expanded : ''
        }`}
      >
        {displayedTemplates.map((name, index) => (
          <Template key={name} name={name} fileName={data.names_files[index]} />
        ))}
      </ul>
    </div>
  );
};

export default Templates;
