import { FC, useState } from 'react';
import Avatar from '../../../ui/avatar/avatar';
import stylesInformation from './Information.module.scss';
import DropDownList from '../DropDownList/DropDownList';
import MenuInformation from '../../../ui/menus/menu-information/menu-information';
import Files from '../Files/Files';
import Typography from '../../../ui/typography/typography';
import { URL_AVATAR } from '../../../utils/config';

interface IInformation {
  image?: string;
  selectedUser?: any;
}

const Information: FC<IInformation> = ({ image, selectedUser }) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={stylesInformation.information}>
      <div className={stylesInformation.information__container}>
        <Avatar
          isBot="no"
          state="offline"
          big="yes"
          pic={image || URL_AVATAR}
        />
        <Typography
          tag="h4"
          fontFamily="secondary"
          className={stylesInformation.information__title}
        >
          {selectedUser.name}
        </Typography>
        <Typography tag="p" className={stylesInformation.information__text}>
          Пользователь
        </Typography>
        <MenuInformation
          width={125}
          height={45}
          isActive={isDisabled}
          type="isInformation"
          valueOne="Информация"
          valueTwo="Файлы"
          onClick={() => {
            setIsDisabled(!isDisabled);
          }}
        />
        {isDisabled ? (
          <div className={stylesInformation.information__wrapper}>
            <DropDownList caption="Информация о пользователе" />
            <DropDownList caption="История действий" />
          </div>
        ) : (
          <Files />
        )}
      </div>
    </div>
  );
};

export default Information;
