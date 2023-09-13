// to do: BotsTemplates
// https://trello.com/c/R4RTH1XP/22-%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%D1%8B
// start
import { FC } from 'react';
import stylesTemplates from './bots-templates.module.scss';

const Template: FC = (): JSX.Element => {
  const click = () => {
    console.log('click');
  };
  return (
    <div className={stylesTemplates.item}>
      <div className={stylesTemplates.wrapper_button}>
        <button
          type="button"
          onClick={click}
          className={stylesTemplates.button}
          aria-label="xs"
        />
        <button
          type="button"
          onClick={click}
          className={stylesTemplates.button_plus}
          aria-label="xs"
        />
      </div>
      <p className={stylesTemplates.name_template}>Бот автоответчик</p>
    </div>
  );
};

const Templates: FC = (): JSX.Element => {
  return (
    <div className={stylesTemplates.container}>
      <h2 className={stylesTemplates.title}>Шаблоны</h2>
      <ul className={stylesTemplates.list}>
        <Template />
      </ul>
    </div>
  );
};

export default Templates;
