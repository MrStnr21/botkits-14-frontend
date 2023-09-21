import { FC, useState } from 'react';

import stylesBotMenuPopup from './bot-menu-popup.module.scss';

import ModalPopup from '../modal-popup/modal-popup';
import Input from '../../../ui/inputs/input/input';
import Button from '../../../ui/buttons/button/button';
import ButtonIconCopy from '../../../ui/buttons/button-icon-copy/button-icon-copy';

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
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [open, setOpen] = useState(false);

  const onClickURL = () => {
    setOpen(true);
  };

  return (
    <ModalPopup onClick={onClose}>
      <div className={stylesBotMenuPopup.bot_menu}>
        <h3 className={stylesBotMenuPopup.title}>{title}</h3>
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
              <p className={stylesBotMenuPopup.text}>Название канала</p>
              <p className={stylesBotMenuPopup.value}>ChanelName</p>
            </div>
            <hr className={stylesBotMenuPopup.hr} />
            <div>
              <p className={stylesBotMenuPopup.text}>Ключ доступа</p>
              <div className={stylesBotMenuPopup.value}>
                <p>1842016250:AAF8uWUV1wE9B8XxZvfbmRiZkmh1tWXu-Ns</p>
                <ButtonIconCopy onClick={onClickURL} />
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <p className={stylesBotMenuPopup.text}>
                Подписаться на уведомления
              </p>
              <div className={stylesBotMenuPopup.value}>
                <p>/notify 60a280e3f7b15d37975ccb69</p>
                <ButtonIconCopy onClick={onClickURL} />
              </div>
            </div>
            <hr className={stylesBotMenuPopup.hr} />
            <div>
              <p className={stylesBotMenuPopup.text}>
                Отписаться от уведомлений
              </p>
              <div className={stylesBotMenuPopup.value}>
                <p>/disable_notify 60a280e3f7b15d37975ccb69</p>
                <ButtonIconCopy onClick={onClickURL} />
              </div>
            </div>
          </>
        )}
        {open && (
          <p className={stylesBotMenuPopup.open_modal}>Ссылка скопирована</p>
        )}
      </div>
    </ModalPopup>
  );
};

export default BotMenuPopup;
