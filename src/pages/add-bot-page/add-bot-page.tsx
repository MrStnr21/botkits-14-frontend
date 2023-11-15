import { useState, FC } from 'react';

import stylesAddBotPage from './add-bot-page.module.scss';

import HowItWorks from '../../components/add-bot/how-it-works/how-it-works';
import CreateBot from '../../components/add-bot/create-bot/create-bot';
import AddBot from '../../components/add-bot/add-bot/add-bot';
import { IBot } from '../../utils/types';
import CheckboxDone from '../../ui/checkbox-done/checkbox-done';

const AddBotPage: FC = (): JSX.Element => {
  const [bot, setBot] = useState<IBot>({
    name: '',
    pages: false,
    botURI: false,
  });
  const [crm, setCrm] = useState(true);
  const dsb = true;

  const onClick = (name: string, pages: boolean, botURI: boolean) => {
    setBot({
      name,
      pages,
      botURI,
    });
  };

  const onCrmChange = () => {
    setCrm(!crm);
  };

  return (
    <div className={stylesAddBotPage.add_bot_page}>
      <CheckboxDone
        label="Опубликовать"
        name="crm"
        value="crm"
        onChange={onCrmChange}
        checked={crm}
      />
      <CheckboxDone
        label="Опубликовать"
        name="crm"
        value="crm"
        onChange={onCrmChange}
        checked={crm}
        disabled={dsb}
      />
      <AddBot bot={bot} onClick={onClick} />
      <div className={stylesAddBotPage.add_bot_page_container}>
        <CreateBot botName={bot.name} pages={bot.pages} botURI={bot?.botURI} />
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
