import { useState, FC } from 'react';

import styles from './add-bot-page.module.scss';

import HowItWorks from '../../components/add-bot/how-it-works/how-it-works';
import CreateBot from '../../components/add-bot/create-bot/create-bot';
import AddBot from '../../components/add-bot/add-bot/add-bot';
import { IBot } from '../../utils/types';

const AddBotPage: FC = () => {
  const currentUrl = new URL(window.location.href);
  const templateId = currentUrl.searchParams.get('template');
  const templateTitle = currentUrl.searchParams.get('title');

  const [bot, setBot] = useState<IBot>({
    name: '',
    pages: false,
    botURI: false,
  });

  const onClick = (name: string, pages: boolean, botURI: boolean) => {
    setBot({
      name,
      pages,
      botURI,
    });
  };

  return (
    <div className={styles.add_bot_page}>
      <AddBot bot={bot} onClick={onClick} />
      <div className={styles.add_bot_page_container}>
        <CreateBot
          botName={bot.name}
          pages={bot.pages}
          botURI={bot?.botURI}
          templateId={templateId}
          templateTitle={templateTitle}
        />
        {bot && (
          <div className={styles.add_bot_page_works}>
            <HowItWorks />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBotPage;
