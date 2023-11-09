import { FC } from 'react';
import stylesImage from './UploadedImage.module.scss';

interface IUploadedFiles {
  image?: string;
}

const UploadedImage: FC<IUploadedFiles> = ({
  image = 'https://w-dog.ru/wallpapers/10/0/487435280633581/derevya-prirody-pejzazh-ozero-cvety-puti-nebo-oblaka-zakat-gory.jpg',
}) => {
  return (
    <div className={stylesImage.container}>
      <img src={image} alt="загруженное изображение" />
    </div>
  );
};

export default UploadedImage;
