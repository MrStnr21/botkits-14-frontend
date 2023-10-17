import { FC } from 'react';
import stylesAvatar from './avatar.module.scss';

interface IAvatar {
  pic: string;
}

const Avatar: FC<IAvatar> = ({ pic }): JSX.Element => {
  return (
    <img className={stylesAvatar.avatar} alt="аватар пользователя" src={pic} />
  );
};

export default Avatar;
