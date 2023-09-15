import { FC, FormEvent, useState } from 'react';
import { ReactComponent as Facebook } from '../../../images/icon/40x40/facebook/hover.svg';
import { ReactComponent as Instagram } from '../../../images/icon/40x40/insta/hover.svg';
import { ReactComponent as Alisa } from '../../../images/icon/40x40/alisa/hover.svg';
import { ReactComponent as Odnoklassniki } from '../../../images/icon/40x40/odnoklassniki/hover.svg';
import { ReactComponent as VK } from '../../../images/icon/40x40/vk/hover.svg';
import { ReactComponent as Viber } from '../../../images/icon/40x40/viber/hover.svg';
import { ReactComponent as Telegram } from '../../../images/icon/40x40/telegram/hover.svg';
import { ReactComponent as Whatsapp } from '../../../images/icon/40x40/whatsapp/hover.svg';
import { ReactComponent as WebSite } from '../../../images/icon/40x40/web/hover.svg';
import stylesCreateBot from './create-bot.module.scss';
import StepperFillBot from '../../../ui/stepper-fill-bot/stepper-fill-bot';
import LoadPages from '../../../ui/inputs/load-pages/load-pages';
import Input from '../../../ui/inputs/input/input';
import Button from '../../../ui/buttons/button/button';
import useForm from '../../../utils/use-form';

const img: any = {
  Facebook: <Facebook className={stylesCreateBot.create_main_bot_name_img} />,
  Telegram: <Telegram className={stylesCreateBot.create_main_bot_name_img} />,
  Viber: <Viber className={stylesCreateBot.create_main_bot_name_img} />,
  VK: <VK className={stylesCreateBot.create_main_bot_name_img} />,
  Odnokassniki: (
    <Odnoklassniki className={stylesCreateBot.create_main_bot_name_img} />
  ),
  Алиса: <Alisa className={stylesCreateBot.create_main_bot_name_img} />,
  Whatsapp: <Whatsapp className={stylesCreateBot.create_main_bot_name_img} />,
  Instagram: <Instagram className={stylesCreateBot.create_main_bot_name_img} />,
  'Веб-сайт': <WebSite className={stylesCreateBot.create_main_bot_name_img} />,
};

export interface ICreateBot {
  botName: string;
  stepFirst: 'default' | 'upload';
  botURI?: boolean;
}

const CreateBot: FC<ICreateBot> = ({ botName, stepFirst, botURI }) => {
  const [arrPages, setArrPages] = useState<any>([]);

  const { values, handleChange } = useForm({
    botName: '',
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataBot = {
      ...values,
      pages: arrPages,
    };
    // Добавить отправку данных на бэк
    // Добавить редирект на страницу бота
    console.log(dataBot);
  };
  return (
    <div className={stylesCreateBot.create}>
      {botName ? (
        <div className={stylesCreateBot.create_main}>
          <div className={stylesCreateBot.create_main_bot_name}>
            {img[botName]}
            <h3 className={stylesCreateBot.create_main_bot_name_title}>
              {botName}
            </h3>
            <p className={stylesCreateBot.create_main_bot_name_text}>
              Бот будет создан на основе{' '}
              <span className={stylesCreateBot.create_main_bot_name_span}>
                BotName
              </span>
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className={stylesCreateBot.create_main_form}
          >
            <div className={stylesCreateBot.create_main_fill_bot}>
              {stepFirst === 'default' ? (
                <StepperFillBot step="1" text="Ключ доступа">
                  <Input
                    name="accessKey"
                    value={values?.accessKey}
                    placeholder="Введите ключ доступа"
                    onChange={handleChange}
                  />
                </StepperFillBot>
              ) : (
                <StepperFillBot step="1" text="Загрузить страницу">
                  <LoadPages
                    arr={arrPages}
                    onClick={() =>
                      setArrPages([...arrPages, { text: 'Страница' }])
                    }
                  />
                </StepperFillBot>
              )}

              {botURI ? (
                <>
                  <StepperFillBot step="2" text="URI бота">
                    <Input
                      name="uri"
                      value={values?.uri}
                      placeholder="Введите URI"
                      onChange={handleChange}
                    />
                  </StepperFillBot>
                  <StepperFillBot step="3" text="Название бота">
                    <Input
                      name="botName"
                      value={values?.botName}
                      placeholder="Введите название бота"
                      onChange={handleChange}
                    />
                  </StepperFillBot>
                </>
              ) : (
                <StepperFillBot step="2" text="Название бота">
                  <Input
                    name="botName"
                    value={values?.botName}
                    placeholder="Введите название бота"
                    onChange={handleChange}
                  />
                </StepperFillBot>
              )}
            </div>

            <div className={stylesCreateBot.create_main_button_container}>
              <div className={stylesCreateBot.create_main_button}>
                <Button
                  size="large"
                  variant="default"
                  color="green"
                  buttonHtmlType="submit"
                  disabled={!values.botName.length}
                >
                  Создать бота
                </Button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className={stylesCreateBot.create_message}>
          <h3 className={stylesCreateBot.create_message_title}>
            К какому мессенджеру подключим бота?
          </h3>
          <p className={stylesCreateBot.create_message_text}>
            Выберите из предложенного списка
          </p>
        </div>
      )}
    </div>
  );
};

export default CreateBot;
