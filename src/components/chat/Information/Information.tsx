import { FC, useState } from 'react';
import avatar from '../../../images/avatar/circled/bigAvatar.svg';
import stylesInformation from './Information.module.scss';
import DropDownList from '../DropDownList/DropDownList';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';

interface IInformation {
  image?: string;
  name?: string;
}

const Information: FC<IInformation> = ({
  image,
  name = 'Сергей Надеин',
}): JSX.Element => {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className={stylesInformation.container}>
      <button
        className={stylesInformation.chevron}
        type="button"
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        <ChevronIcon color="#FFFFFF" position="right" />
      </button>
      {isVisible && (
        <div className={stylesInformation.information}>
          <img src={image || avatar} alt="Аватар" />
          <p className={stylesInformation.title}>{name}</p>
          <p className={stylesInformation.text}>Пользователь</p>
          <nav className={stylesInformation.nav}>
            <button
              type="button"
              className={stylesInformation.button}
              disabled={isDisabled}
              onClick={() => {
                setIsDisabled(!isDisabled);
              }}
            >
              Информация
            </button>
            <button
              type="button"
              className={stylesInformation.button}
              disabled={!isDisabled}
              onClick={() => {
                setIsDisabled(!isDisabled);
              }}
            >
              Файлы
            </button>
          </nav>
          {isDisabled ? (
            <div className={stylesInformation.wrapper}>
              <DropDownList caption="Информация о пользователе" />
              <DropDownList caption="История действий" />
            </div>
          ) : (
            <div className={stylesInformation.wrapper}>
              <p>Загруженные файлы</p>
              <p>Изображения</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Information;
