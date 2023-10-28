import { FC, useState } from 'react';
import avatar from '../../../images/avatar/circled/bigAvatar.svg';
import stylesInformation from './Information.module.scss';
import DropDownList from '../DropDownList/DropDownList';
import ChevronIcon from '../../icons/Chevron/ChevronIcon';
import UploadedFile from '../UploadedFile/UploadedFile';
import UploadedImage from '../UploadedImage/UploadedImage';

interface IInformation {
  image?: string;
  name?: string;
}

// const dataFile = [
//   {
//     name: 'Инфо',
//     extension: 'pdf',
//   },
//   {
//     name: 'Список',
//     extension: 'docx',
//   },
// ];

// const dataImage = [
//   'https://fikiwiki.com/uploads/posts/2022-02/1644855639_6-fikiwiki-com-p-kartinki-khd-kachestva-6.jpg',
//   'https://w.forfun.com/fetch/b3/b33164ded5864ed5ba7728b3c0611181.jpeg',
//   'https://catherineasquithgallery.com/uploads/posts/2021-02/1612872204_51-p-kartinki-na-krasnom-fone-dlya-telefona-68.jpg',
// ];

const dataFile = null;
const dataImage = null;

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
            <div>
              {dataFile && dataImage ? (
                <div className={stylesInformation.files}>
                  <p className={stylesInformation.paragraph}>
                    Загруженные файлы
                  </p>
                  <div>
                    <button type="button" className={stylesInformation.button}>
                      Все
                    </button>
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
                    <button type="button" className={stylesInformation.button}>
                      Все
                    </button>
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
