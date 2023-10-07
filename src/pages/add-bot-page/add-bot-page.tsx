import { useState, FC } from 'react';

import stylesAddBotPage from './add-bot-page.module.scss';

import HowItWorks from '../../components/add-bot/how-it-works/how-it-works';
import CreateBot from '../../components/add-bot/create-bot/create-bot';
import AddBot from '../../components/add-bot/add-bot/add-bot';

interface IBot {
  name: string;
  stepFirst: 'default' | 'upload';
  botURI?: boolean;
}

const AddBotPage: FC = (): JSX.Element => {
  const [bot, setBot] = useState<IBot>({
    name: '',
    stepFirst: 'default',
    botURI: false,
  });

  const onClick = (
    name: string,
    stepFirst: 'default' | 'upload',
    botURI: boolean
  ) => {
    setBot({
      name,
      stepFirst,
      botURI,
    });
  };

  return (
    <div className={stylesAddBotPage.add_bot_page}>
      <AddBot bot={bot} onClick={onClick} />
      <div className={stylesAddBotPage.add_bot_page_container}>
        <CreateBot
          botName={bot.name}
          stepFirst={bot.stepFirst}
          botURI={bot?.botURI}
        />
        {bot && (
          <div className={stylesAddBotPage.add_bot_page_works}>
            <HowItWorks />
          </div>
        )}
      </div>
    </div>
  );
};

export default AddBotPage;
