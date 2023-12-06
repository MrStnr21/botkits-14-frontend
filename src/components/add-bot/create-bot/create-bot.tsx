import { FC, FormEvent, useState } from 'react';

import { useNavigate } from 'react-router';

import stylesCreateBot from './create-bot.module.scss';
import { addBotAction } from '../../../services/actions/bots/addBot';

import { useAppDispatch } from '../../../services/hooks/hooks';

import { ReactComponent as Odnoklassniki } from '../../../images/icon/40x40/odnoklassniki/hover.svg';
import { ReactComponent as Telegram } from '../../../images/icon/40x40/telegram/hover.svg';
import { ReactComponent as Whatsapp } from '../../../images/icon/40x40/whatsapp/hover.svg';
import { ReactComponent as Facebook } from '../../../images/icon/40x40/facebook/hover.svg';
import { ReactComponent as Instagram } from '../../../images/icon/40x40/insta/hover.svg';
import { ReactComponent as Viber } from '../../../images/icon/40x40/viber/hover.svg';
import { ReactComponent as WebSite } from '../../../images/icon/40x40/web/hover.svg';
import { ReactComponent as Alisa } from '../../../images/icon/40x40/alisa/hover.svg';
import { ReactComponent as VK } from '../../../images/icon/40x40/vk/hover.svg';

import StepperFillBot from '../../../ui/stepper-fill-bot/stepper-fill-bot';
import LoadPages from '../../../ui/inputs/load-pages/load-pages';
import useForm from '../../../services/hooks/use-form';
import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';

import routesUrl from '../../../utils/routesData';
import { getAccessToken } from '../../../auth/authService';
import Typography from '../../../ui/typography/typography';

interface ImageMap {
  [key: string]: JSX.Element;
}

interface ICreateBot {
  botName: string;
  pages: boolean;
  templateId?: string | null;
  templateTitle: string | null;
  botURI?: boolean;
}

const img: ImageMap = {
  Facebook: <Facebook className={stylesCreateBot.create_main_bot_name_img} />,
  Telegram: <Telegram className={stylesCreateBot.create_main_bot_name_img} />,
  Viber: <Viber className={stylesCreateBot.create_main_bot_name_img} />,
  VK: <VK className={stylesCreateBot.create_main_bot_name_img} />,
  Odnoklassniki: (
    <Odnoklassniki className={stylesCreateBot.create_main_bot_name_img} />
  ),
  Алиса: <Alisa className={stylesCreateBot.create_main_bot_name_img} />,
  Whatsapp: <Whatsapp className={stylesCreateBot.create_main_bot_name_img} />,
  Instagram: <Instagram className={stylesCreateBot.create_main_bot_name_img} />,
  'Веб-сайт': <WebSite className={stylesCreateBot.create_main_bot_name_img} />,
};

const CreateBot: FC<ICreateBot> = ({
  botName,
  pages,
  // TODO: использовать при запросе на сервер
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  templateId,
  templateTitle,
  botURI,
}): JSX.Element => {
  const [arrPages, setArrPages] = useState<string[]>([]);

  const { values, handleChange, setValues } = useForm({
    botName: { value: '', valueValid: false },
    accessKey: { value: '', valueValid: false },
    uri: { value: '', valueValid: false },
  });

  const history = useNavigate();

  const dispatch = useAppDispatch();

  const token = getAccessToken();

  const disabledDefault =
    values.accessKey.value.length > 1 && values.botName.value.length > 1;

  const disabledPages = arrPages.length && values.botName.value.length > 1;

  const disabledBotURI =
    values.accessKey.value.length > 1 &&
    values.botName.value.length > 1 &&
    values.uri.value.length > 1;

  const disabled = botURI
    ? !disabledBotURI
    : !pages
    ? !disabledDefault
    : !disabledPages;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const dataBot = {
      type: 'custom',
      title: values?.botName.value,
      messengers: [
        {
          name: botName,
          pages: arrPages,
          accessKey: values?.accessKey.value,
          url: values?.uri.value,
        },
      ],
      settings: {},
    };

    try {
      dispatch(addBotAction(dataBot, token));
      history(`/${routesUrl.botBuilder}`);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    setValues({
      botName: { value: '', valueValid: false },
      accessKey: { value: '', valueValid: false },
      uri: { value: '', valueValid: false },
    });
  };
  return (
    <div className={stylesCreateBot.create}>
      {botName ? (
        <div className={stylesCreateBot.create_main}>
          <div className={stylesCreateBot.create_main_bot_name}>
            {img[botName]}
            <Typography
              tag="h3"
              fontFamily="secondary"
              className={stylesCreateBot.create_main_bot_name_title}
            >
              {botName}
            </Typography>
            {templateTitle && (
              <Typography
                tag="span"
                className={stylesCreateBot.create_main_bot_name_text}
              >
                Бот будет создан на основе шаблона{' '}
                <span className={stylesCreateBot.create_main_bot_name_span}>
                  {templateTitle}
                </span>
              </Typography>
            )}
          </div>
          <form
            onSubmit={handleSubmit}
            className={stylesCreateBot.create_main_form}
          >
            <div className={stylesCreateBot.create_main_fill_bot}>
              {!pages ? (
                <StepperFillBot step="1" text="Ключ доступа">
                  <Input
                    name="accessKey"
                    value={values?.accessKey.value}
                    placeholder="Введите ключ доступа"
                    onChange={handleChange}
                  />
                </StepperFillBot>
              ) : (
                <StepperFillBot step="1" text="Загрузить страницу">
                  <LoadPages
                    arr={arrPages}
                    onClick={() => setArrPages([...arrPages, 'Страница'])}
                  />
                </StepperFillBot>
              )}

              {botURI ? (
                <>
                  <StepperFillBot step="2" text="URI бота">
                    <Input
                      name="uri"
                      value={values?.uri.value}
                      placeholder="Введите URI"
                      onChange={handleChange}
                    />
                  </StepperFillBot>
                  <StepperFillBot step="3" text="Название бота">
                    <Input
                      name="botName"
                      value={values?.botName.value}
                      placeholder="Введите название бота"
                      onChange={handleChange}
                    />
                  </StepperFillBot>
                </>
              ) : (
                <StepperFillBot step="2" text="Название бота">
                  <Input
                    name="botName"
                    value={values?.botName.value}
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
                  disabled={disabled}
                >
                  Создать бота
                </Button>
              </div>
            </div>
          </form>
        </div>
      ) : (
        <div className={stylesCreateBot.create_message}>
          <Typography
            tag="h3"
            fontFamily="secondary"
            className={stylesCreateBot.create_message_title}
          >
            К какому мессенджеру подключим бота?
          </Typography>
          <Typography tag="p" className={stylesCreateBot.create_message_text}>
            Выберите из предложенного списка
          </Typography>
        </div>
      )}
    </div>
  );
};

export default CreateBot;
