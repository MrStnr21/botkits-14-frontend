import { FC, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDraggable } from 'react-use-draggable-scroll';

import stylesAddBot from './add-bot.module.scss';

import ButtonAddSocial from '../../../ui/buttons/button-add-social/button-add-social';

interface IAddBot {
  onClick: (
    name: string,
    stepFirst: 'default' | 'upload',
    botURI: boolean
  ) => void;
  bot: any;
}
const AddBot: FC<IAddBot> = ({ onClick, bot }): JSX.Element => {
  const socials: Array<{
    name: string;
    icon: string;
    stepFirst: 'default' | 'upload';
    botURI: boolean;
  }> = [
    {
      name: 'Facebook',
      icon: 'facebook',
      stepFirst: 'upload',
      botURI: false,
    },
    {
      name: 'VK',
      icon: 'vk',
      stepFirst: 'upload',
      botURI: false,
    },
    {
      name: 'Odnokassniki',
      icon: 'odnoklassniki',
      stepFirst: 'default',
      botURI: false,
    },
    {
      name: 'Telegram',
      icon: 'telegram',
      stepFirst: 'default',
      botURI: false,
    },
    {
      name: 'Viber',
      icon: 'viber',
      stepFirst: 'default',
      botURI: true,
    },
    {
      name: 'Алиса',
      icon: 'alisa',
      stepFirst: 'default',
      botURI: false,
    },
    {
      name: 'Whatsapp',
      icon: 'whatsapp',
      stepFirst: 'default',
      botURI: false,
    },
    {
      name: 'Instagram',
      icon: 'insta',
      stepFirst: 'default',
      botURI: false,
    },
    {
      name: 'Веб-сайт',
      icon: 'web',
      stepFirst: 'default',
      botURI: false,
    },
  ];
  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return (
    <div className={stylesAddBot.add_bot}>
      <h2 className={stylesAddBot.add_bot_title}>Добавить бота</h2>
      <ul className={stylesAddBot.add_bot_list} {...events} ref={ref}>
        {socials?.map((social) => (
          <li key={social.name} className={stylesAddBot.add_bot_item}>
            <ButtonAddSocial
              social={social.icon}
              onClick={() =>
                onClick(social.name, social.stepFirst, social.botURI)
              }
              buttonHtmlType="button"
              extraClass={
                bot ? (social.name !== bot?.name ? 'disabled' : 'active') : ''
              }
            >
              {social.name}
            </ButtonAddSocial>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddBot;
