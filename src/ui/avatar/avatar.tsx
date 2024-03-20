/* eslint-disable react/no-unused-prop-types */
import { FC, useMemo } from 'react';
import styles from './avatar.module.scss';
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
  big?: string;
  botTemplates?: string;
}

const defaultAvatars = [
  defaultAvatar1,
  defaultAvatar2,
  defaultAvatar3,
  defaultAvatar4,
];
const Avatar: FC<IAvatar> = ({
  pic,
  state = 'online' || 'offline',
  isBot = 'yes' || 'no',
  big = 'yes' || 'no',
  botTemplates = 'no',
}) => {
  const randomAvatar = useMemo(() => {
    const randomIndex = getRandomInt(defaultAvatars.length);
    return defaultAvatars[randomIndex];
  }, [defaultAvatars]);

  return (
    <div>
      {big === 'yes' ? (
        <div
          className={
            botTemplates === 'yes'
              ? styles.avatarBotTemplatesContainer
              : styles.avatarBigContainer
          }
        >
          <img
            className={
              botTemplates === 'yes'
                ? styles.avatarBotTemplates
                : styles.avatarBig
            }
            alt="аватар пользователя"
            src={pic || randomAvatar}
          />
        </div>
      ) : state === 'online' && isBot === 'no' ? (
        <div className={styles.avatarContainer}>
          <div className={styles.onlineIndicator} />
          <img
            className={styles.avatar}
            alt="аватар пользователя"
            src={pic || randomAvatar}
          />
        </div>
      ) : state === 'online' && isBot === 'yes' ? (
        <div className={styles.avatarContainerBot}>
          <div className={styles.botIndicator}>
            <BotIcon />
          </div>
          <div className={styles.onlineIndicator} />
          <img
            className={styles.avatarBot}
            alt="аватар бота"
            src={pic || randomAvatar}
          />
        </div>
      ) : state === 'offline' && isBot === 'yes' ? (
        <div className={styles.avatarContainerBot}>
          <div className={styles.botIndicator}>
            <BotIcon />
          </div>
          <img
            className={styles.avatarBot}
            alt="аватар бота"
            src={pic || randomAvatar}
          />
        </div>
      ) : (
        <img
          className={styles.avatar}
          alt="аватар пользователя"
          src={pic || randomAvatar}
        />
      )}
    </div>
  );
};

export default Avatar;
