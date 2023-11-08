import { FC, useMemo } from 'react';
import stylesAvatar from './avatar.module.scss';
import defaultAvatar1 from '../../images/avatar/default/default_avatar_1.png';
import defaultAvatar2 from '../../images/avatar/default/default_avatar_2.png';
import defaultAvatar3 from '../../images/avatar/default/default_avatar_3.png';
import defaultAvatar4 from '../../images/avatar/default/default_avatar_4.png';
import getRandomInt from '../../utils/getRandomInt';
import BotIcon from '../../components/icons/Bot/BotIcon';

interface IAvatar {
  pic?: string;
  state: string;
  isBot: string;
  big: string;
}

const defaultAvatars = [
  defaultAvatar1,
  defaultAvatar2,
  defaultAvatar3,
  defaultAvatar4,
];

const Avatar: FC<IAvatar> = ({
  pic = defaultAvatars[getRandomInt(4)],
  state = 'online' || 'offline',
  isBot = 'yes' || 'no',
  big = 'yes' || 'no',
}): JSX.Element => {
  return useMemo(
    () => (
      <div>
        {big === 'yes' ? (
          <div className={stylesAvatar.avatarBigContainer}>
            <img
              className={stylesAvatar.avatarBig}
              alt="аватар пользователя"
              src={pic}
            />
          </div>
        ) : state === 'online' && isBot === 'no' ? (
          <div className={stylesAvatar.avatarContainer}>
            <div className={stylesAvatar.onlineIndicator} />
            <img
              className={stylesAvatar.avatar}
              alt="аватар пользователя"
              src={pic}
            />
          </div>
        ) : state === 'online' && isBot === 'yes' ? (
          <div className={stylesAvatar.avatarContainerBot}>
            <div className={stylesAvatar.botIndicator}>
              <BotIcon />
            </div>
            <div className={stylesAvatar.onlineIndicator} />
            <img
              className={stylesAvatar.avatarBot}
              alt="аватар бота"
              src={pic}
            />
          </div>
        ) : state === 'offline' && isBot === 'yes' ? (
          <div className={stylesAvatar.avatarContainerBot}>
            <div className={stylesAvatar.botIndicator}>
              <BotIcon />
            </div>
            <img
              className={stylesAvatar.avatarBot}
              alt="аватар бота"
              src={pic}
            />
          </div>
        ) : (
          <img
            className={stylesAvatar.avatar}
            alt="аватар пользователя"
            src={pic}
          />
        )}
      </div>
    ),
    [state, isBot, big]
  );
};

export default Avatar;
