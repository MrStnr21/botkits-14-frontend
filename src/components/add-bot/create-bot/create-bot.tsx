import { FC, FormEvent, useState } from 'react';

import { useNavigate } from 'react-router';

import styles from './create-bot.module.scss';
import { addBotAction } from '../../../services/actions/bots/addBot';

import { useAppDispatch } from '../../../services/hooks/hooks';

import StepperFillBot from '../stepper-fill-bot/stepper-fill-bot';
import LoadPages from '../load-pages/load-pages';
import useForm, { TInputValue } from '../../../services/hooks/use-form';
import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';

import routesUrl from '../../../utils/routesData';
import Typography from '../../../ui/typography/typography';
import Icon from '../../../ui/icon/icon';
import messengerIcons from '../../bot-card/utils';

export interface ICreateBot {
  botName: string;
  pages: boolean;
  templateId: string | null;
  templateTitle: string | null;
  botURI?: boolean;
}

type TBotFormState = {
  botName: TInputValue<string>;
  accessKey: TInputValue<string>;
  uri: TInputValue<string>;
};

const CreateBot: FC<ICreateBot> = ({
  botName,
  pages,
  templateId,
  templateTitle,
  botURI,
}) => {
  const [arrPages, setArrPages] = useState<string[]>([]);

  const { values, handleChange, setValues } = useForm<TBotFormState>({
    botName: { value: '', isValid: false },
    accessKey: { value: '', isValid: false },
    uri: { value: '', isValid: false },
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
      dispatch(
        addBotAction(dataBot, templateId, (newBotId: string) =>
          navigate(`/${routesUrl.botBuilder}?id=${newBotId}&type=custom`)
        )
      );
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    setValues({
      botName: { value: '', isValid: false },
      accessKey: { value: '', isValid: false },
      uri: { value: '', isValid: false },
    });
  };
  return (
    <div className={styles.create}>
      {botName ? (
        <div className={styles.create_main}>
          <div className={styles.create_main_bot_name}>
            <Icon
              icon={messengerIcons[botName]}
              isColored={false}
              extraClass={styles.create_main_bot_name_img}
            />
            <Typography
              tag="h3"
              fontFamily="secondary"
              className={styles.create_main_bot_name_title}
            >
              {botName}
            </Typography>
            {templateTitle && (
              <Typography
                tag="span"
                className={styles.create_main_bot_name_text}
              >
                Бот будет создан на основе шаблона{' '}
                <span className={styles.create_main_bot_name_span}>
                  {templateTitle}
                </span>
              </Typography>
            )}
          </div>
          <form onSubmit={handleSubmit} className={styles.create_main_form}>
            <div className={styles.create_main_fill_bot}>
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

            <div className={styles.create_main_button_container}>
              <div className={styles.create_main_button}>
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
        <div className={styles.create_message}>
          <Typography
            tag="h3"
            fontFamily="secondary"
            className={styles.create_message_title}
          >
            К какому мессенджеру подключим бота?
          </Typography>
          <Typography tag="p" className={styles.create_message_text}>
            Выберите из предложенного списка
          </Typography>
        </div>
      )}
    </div>
  );
};

export default CreateBot;
