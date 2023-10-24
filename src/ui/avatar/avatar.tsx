import { FC } from 'react';
import stylesAvatar from './avatar.module.scss';
import defaultAvatar1 from '../../images/avatar/default/default_avatar_1.png';
import defaultAvatar2 from '../../images/avatar/default/default_avatar_2.png';
import defaultAvatar3 from '../../images/avatar/default/default_avatar_3.png';
import defaultAvatar4 from '../../images/avatar/default/default_avatar_4.png';
import getRandomInt from '../../utils/getRandomInt';

interface IAvatar {
  pic?: string;
  state: string;
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
}): JSX.Element => {
  return (
    <div className={stylesAvatar.mainContainer}>
      {state === 'online' ? (
        <div className={stylesAvatar.avatarContainer}>
          <div className={stylesAvatar.onlineIndicator} />
          <img
            className={stylesAvatar.avatar}
            alt="аватар пользователя"
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
  );
};

export default Avatar;
