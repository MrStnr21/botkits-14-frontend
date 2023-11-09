/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useState } from 'react';
import Avatar from '../../../ui/avatar/avatar';
import stylesInformation from './Information.module.scss';
import DropDownList from '../DropDownList/DropDownList';
import MenuInformation from '../../../ui/menus/menu-information/menu-information';
import RightSidebarButton from '../../../ui/buttons/right-sidebar-button/right-sidebar-button';
import Files from '../Files/Files';
import Typography from '../../../ui/typography/typography';

interface IInformation {
  image?: string;
  name?: string;
}

const Information: FC<IInformation> = ({
  image,
  name = 'Вячеслав Баумтрок',
}) => {
  const [isDisabled, setIsDisabled] = useState(true);

  return (
    <div className={stylesInformation.information}>
      <div className={stylesInformation.information__container}>
        <Avatar
          isBot="no"
          state="offline"
          big="yes"
          pic={
            image ||
            'https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
          }
        />
        <Typography
          tag="h4"
          fontFamily="secondary"
          className={stylesInformation.information__title}
        >
          {name}
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
