import { FC } from 'react';
import stylesFile from './UploadedFile.module.scss';
import AttachedFileIcon from '../../icons/AttachedFile/AttachedFileIcon';

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
      <AttachedFileIcon />
      <p className={stylesFile.text}>
        {file_name}.{file_extension}
      </p>
    </div>
  );
};

export default UploadedFile;
