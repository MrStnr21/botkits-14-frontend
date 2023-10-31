import { FC, useState } from 'react';
import Avatar from '../../../ui/avatar/avatar';
import stylesInformation from './Information.module.scss';
import DropDownList from '../DropDownList/DropDownList';
import UploadedFile from '../UploadedFile/UploadedFile';
import UploadedImage from '../UploadedImage/UploadedImage';
import RightSidebarButton from '../../../ui/buttons/right-sidebar-button/right-sidebar-button';
import ButtonNotBackground from '../../../ui/buttons/button-not-background/button-not-background';
import { dataFile, dataImage } from '../../../utils/uploadedFiles';

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
      <RightSidebarButton
        onClick={() => {
          setIsVisible(!isVisible);
        }}
        isVisible={isVisible}
        topPX="485px"
        leftPX="-31px"
      />
      {isVisible && (
        <div className={stylesInformation.information}>
          <Avatar
            isBot="no"
            state="offline"
            big="yes"
            pic={
              image ||
              'https://images.unsplash.com/photo-1614035030394-b6e5b01e0737?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpdHRlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
            }
          />
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
            <div>
              {dataFile && dataImage ? (
                <div className={stylesInformation.files}>
                  <p className={stylesInformation.paragraph}>
                    Загруженные файлы
                  </p>
                  <div>
                    <ButtonNotBackground>Все</ButtonNotBackground>
                  </div>
                  <div className={stylesInformation.itemColumn}>
                    {dataFile.map((value) => (
                      <UploadedFile
                        file_name={value.name}
                        file_extension={value.extension}
                      />
                    ))}
                  </div>
                  <p className={stylesInformation.paragraph}> Изображения </p>
                  <div>
                    <ButtonNotBackground>Все</ButtonNotBackground>
                  </div>
                  <div className={stylesInformation.itemRow}>
                    {dataImage.map((value) => (
                      <UploadedImage image={value} />
                    ))}
                  </div>
                </div>
              ) : (
                <div className={stylesInformation.information}>
                  <p className={stylesInformation.text}>
                    У вас пока нет загруженных файлов
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Information;
