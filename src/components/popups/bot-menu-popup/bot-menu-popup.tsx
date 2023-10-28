import { FC, useState } from 'react';

import stylesBotMenuPopup from './bot-menu-popup.module.scss';

import ModalPopup from '../modal-popup/modal-popup';

import ButtonIconCopy from '../../../ui/buttons/button-icon-copy/button-icon-copy';
import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';

export interface IBotMenuPopup {
  type?: 'default' | 'info' | 'notify';
  title: string;
  placeholder: string;
  buttonText: string;
  value: string;
  onClose: () => void;
  onClick?: () => void;
  isLink?: boolean;
}

const BotMenuPopup: FC<IBotMenuPopup> = ({
  type = 'default',
  title,
  placeholder,
  buttonText,
  value = '',
  onClose,
  onClick,
  isLink,
}): JSX.Element => {
  const [inputValue, setInputValue] = useState(value);
  const [open, setOpen] = useState(false);

  const onClickURL = () => {
    setOpen(true);
  };

  return (
    <ModalPopup onClick={onClose}>
      <div className={stylesBotMenuPopup.bot_menu}>
        <Typography tag="h3" className={stylesBotMenuPopup.title}>
          {title}
        </Typography>
        {type === 'default' ? (
          <>
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder={placeholder}
              type={isLink ? 'url' : 'text'}
            />
            {isLink ? (
              <Button
                onClick={onClickURL}
                size="medium"
                variant="default"
                color="grey"
                buttonHtmlType="submit"
              >
                {!open ? 'Скопировать ссылку' : 'Ссылка скопирована'}
              </Button>
            ) : (
              <div className={stylesBotMenuPopup.buttons}>
                <button
                  className={stylesBotMenuPopup.cancel}
                  type="button"
                  onClick={onClose}
                >
                  Отмена
                </button>
                <div className={stylesBotMenuPopup.add_button}>
                  <Button
                    onClick={onClick}
                    size="medium"
                    variant="default"
                    color="blue"
                    buttonHtmlType="submit"
                  >
                    {buttonText}
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : type === 'notify' ? (
          <>
            <div>
              <Typography
                tag="p"
                className={stylesBotMenuPopup.text}
                font="OpenSans"
              >
                Название канала
              </Typography>
              <Typography
                tag="p"
                className={stylesBotMenuPopup.value}
                font="OpenSans"
              >
                ChanelName
              </Typography>
            </div>
            <hr className={stylesBotMenuPopup.hr} />
            <div>
              <Typography
                tag="p"
                className={stylesBotMenuPopup.text}
                font="OpenSans"
              >
                Ключ доступа
              </Typography>
              <div className={stylesBotMenuPopup.value}>
                <Typography tag="p" font="OpenSans">
                  1842016250:AAF8uWUV1wE9B8XxZvfbmRiZkmh1tWXu-Ns
                </Typography>
                <ButtonIconCopy onClick={onClickURL} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <Typography
                tag="p"
                className={stylesBotMenuPopup.text}
                font="OpenSans"
              >
                Подписаться на уведомления
              </Typography>
              <div className={stylesBotMenuPopup.value}>
                <Typography tag="p" font="OpenSans">
                  /notify 60a280e3f7b15d37975ccb69
                </Typography>
                <ButtonIconCopy onClick={onClickURL} />
              </div>
            </div>
            <hr className={stylesBotMenuPopup.hr} />
            <div>
              <Typography
                tag="p"
                className={stylesBotMenuPopup.text}
                font="OpenSans"
              >
                Отписаться от уведомлений
              </Typography>
              <div className={stylesBotMenuPopup.value}>
                <Typography tag="p" font="OpenSans">
                  /disable_notify 60a280e3f7b15d37975ccb69
                </Typography>
                <ButtonIconCopy onClick={onClickURL} />
              </div>
            </div>
          </>
        )}
        {open && (
          <Typography tag="p" className={stylesBotMenuPopup.open_modal}>
            Ссылка скопирована
          </Typography>
        )}
      </div>
    </ModalPopup>
  );
};

export default BotMenuPopup;
