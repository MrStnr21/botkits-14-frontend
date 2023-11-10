import { FC, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import Avatar from '../../../ui/avatar/avatar';
import stylesInformation from './Information.module.scss';
import Typography from '../../../ui/typography/typography';
import MenuInformation from '../../../ui/menus/menu-information/menu-information';
import { testData } from '../../../utils/mockChatData';
import DropDownList from '../DropDownList/DropDownList';
import Files from '../Files/Files';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import DialogMenuIcon from '../../icons/DialogMenuIcon/DialogMenuIcon';

const MobileDialogInformation: FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = testData.find((data: any) => data.user.id === id);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChevronClick = () => {
    navigate(-1);
  };

  return (
    <div className={stylesInformation.information}>
      <div className={stylesInformation.information__header}>
        <button
          type="button"
          className={stylesInformation.information__chevron}
          onClick={handleChevronClick}
        >
          <ChevronIcon width={24} height={24} color="#a6b3c9" position="left" />
        </button>
        <button
          type="button"
          className={stylesInformation.information__chevron}
          // onClick={handleMenuClick}
        >
          <DialogMenuIcon />
        </button>
      </div>
      <div className={stylesInformation.information__container}>
        <Avatar
          isBot="no"
          state="offline"
          big="yes"
          pic={
            // image ||
            'https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
          }
        />
        <Typography
          tag="h4"
          fontFamily="secondary"
          className={stylesInformation.information__title}
        >
          {user!.user.name}
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

export default MobileDialogInformation;
