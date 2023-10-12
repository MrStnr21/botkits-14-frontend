import { FC, useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDraggable } from 'react-use-draggable-scroll';

import stylesAddBot from './add-bot.module.scss';

import ButtonAddSocial from '../../../ui/buttons/button-add-social/button-add-social';
import { IBot } from '../../../utils/types';
import { useAppDispatch, useAppSelector } from '../../../services/hooks/hooks';
import { getAccessToken } from '../../../auth/authService';
import { getPlatformsAction } from '../../../services/actions/platforms/getPlatforms';
import { getPlatformsSel } from '../../../utils/selectorData';

interface IAddBot {
  onClick: (name: string, pages: boolean, botURI: boolean) => void;
  bot: IBot;
}

const AddBot: FC<IAddBot> = ({ onClick, bot }): JSX.Element => {
  const { platforms } = useAppSelector(getPlatformsSel);

  const dispatch = useAppDispatch();

  const token = getAccessToken();

  useEffect(() => {
    dispatch(getPlatformsAction(token));
  }, [dispatch]);

  console.log(platforms);
  // const socials: Array<{
  //   name: string;
  //   icon: string;
  //   stepFirst: 'default' | 'upload';
  //   botURI: boolean;
  // }> = [
  //   {
  //     name: 'Facebook',
  //     icon: 'facebook',
  //     stepFirst: 'upload',
  //     botURI: false,
  //   },
  //   {
  //     name: 'VK',
  //     icon: 'vk',
  //     stepFirst: 'upload',
  //     botURI: false,
  //   },
  //   {
  //     name: 'Odnokassniki',
  //     icon: 'odnoklassniki',
  //     stepFirst: 'default',
  //     botURI: false,
  //   },
  //   {
  //     name: 'Telegram',
  //     icon: 'telegram',
  //     stepFirst: 'default',
  //     botURI: false,
  //   },
  //   {
  //     name: 'Viber',
  //     icon: 'viber',
  //     stepFirst: 'default',
  //     botURI: true,
  //   },
  //   {
  //     name: 'Алиса',
  //     icon: 'alisa',
  //     stepFirst: 'default',
  //     botURI: false,
  //   },
  //   {
  //     name: 'Whatsapp',
  //     icon: 'whatsapp',
  //     stepFirst: 'default',
  //     botURI: false,
  //   },
  //   {
  //     name: 'Instagram',
  //     icon: 'insta',
  //     stepFirst: 'default',
  //     botURI: false,
  //   },
  //   {
  //     name: 'Веб-сайт',
  //     icon: 'web',
  //     stepFirst: 'default',
  //     botURI: false,
  //   },
  // ];
  const ref =
    useRef<HTMLDivElement>() as unknown as React.MutableRefObject<HTMLUListElement>;
  const { events } = useDraggable(ref);

  return (
    <div className={stylesAddBot.add_bot}>
      <h2 className={stylesAddBot.add_bot_title}>Добавить бота</h2>
      <ul className={stylesAddBot.add_bot_list} {...events} ref={ref}>
        {platforms?.map((platform) => (
          <li key={platform.title} className={stylesAddBot.add_bot_item}>
            <ButtonAddSocial
              social={platform.icon}
              onClick={() =>
                onClick(
                  platform.title,
                  platform.formFields.pages,
                  platform.formFields.url
                )
              }
              buttonHtmlType="button"
              extraClass={
                bot
                  ? platform.title !== bot?.name
                    ? 'disabled'
                    : 'active'
                  : ''
              }
            >
              {platform.title}
            </ButtonAddSocial>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AddBot;
