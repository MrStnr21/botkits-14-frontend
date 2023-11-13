import { FC } from 'react';
import stylesImage from './UploadedImage.module.scss';
import { URL_IMAGE } from '../../../utils/config';

interface IUploadedFiles {
  image?: string;
}

const UploadedImage: FC<IUploadedFiles> = ({
  image = URL_IMAGE,
}): JSX.Element => {
  return (
    <div className={stylesImage.container}>
      <img src={image} alt="загруженное изображение" />
    </div>
  );
};

export default UploadedImage;
