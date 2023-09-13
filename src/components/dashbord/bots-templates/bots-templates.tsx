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
    <div className={stylesTemplates.item}>
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
    </div>
  );
};

const Templates: FC = (): JSX.Element => {
  const data = {
    names_templates: [
      'Бот автоответчик',
      'Доставка еды',
      'Демо бот',
      'Опрос',
      'Лидогенерация/HR ре...',
      'Онлайн школа/Вебинар',
    ],
    names_files: [
      'answering machine',
      'food delivery',
      'demo bot',
      'poll',
      'lead generation',
      'e-learning',
    ],
  };

  return (
    <div className={stylesTemplates.container}>
      <h2 className={stylesTemplates.title}>Шаблоны</h2>
      <ul className={stylesTemplates.list}>
        {data.names_templates.map((name, index) => (
          <Template key={name} name={name} fileName={data.names_files[index]} />
        ))}
      </ul>
    </div>
  );
};

export default Templates;
