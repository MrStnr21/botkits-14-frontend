import { FC } from 'react';
import icon from '../../../images/icon/add content/doc-circle.svg';
import stylesFile from './UploadedFile.module.scss';

interface IUploadedFile {
  file_name: string;
  file_extension: string;
}

const UploadedFile: FC<IUploadedFile> = ({
  file_name = 'Инфо',
  file_extension = 'pdf',
}): JSX.Element => {
  return (
    <div className={stylesFile.container}>
      <img src={icon} alt="иконка" />
      <p className={stylesFile.text}>
        {file_name}.{file_extension}
      </p>
    </div>
  );
};

export default UploadedFile;
