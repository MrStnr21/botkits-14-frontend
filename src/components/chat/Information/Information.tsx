import { FC } from 'react';
import avatar from '../../../images/avatar/circled/bigAvatar.svg';
import stylesInformation from './Information.module.scss';

interface IInformation {
  image?: string;
  name?: string;
}

const Information: FC<IInformation> = ({
  image,
  name = 'Сергей Надеин',
}): JSX.Element => {
  return (
    <div className={stylesInformation.container}>
      <img src={image || avatar} alt="Аватар" />
      <p className={stylesInformation.title}>{name}</p>
      <p className={stylesInformation.text}>Пользователь</p>
      <nav>
        <ul>
          <li>Информация</li>
          <li>Файлы</li>
        </ul>
      </nav>
    </div>
  );
};

export default Information;
