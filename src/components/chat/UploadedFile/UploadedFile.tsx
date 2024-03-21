import { FC } from 'react';
import stylesFile from './UploadedFile.module.scss';
import AttachedFileIcon from '../../../ui/icons/AttachedFile/AttachedFileIcon';
import Typography from '../../../ui/typography/typography';

interface IUploadedFile {
  file_name?: string;
  file_extension?: string;
}

const UploadedFile: FC<IUploadedFile> = ({
  file_name = 'Инфо',
  file_extension = 'pdf',
}) => {
  return (
    <div className={stylesFile.container}>
      <AttachedFileIcon />
      <Typography tag="p" className={stylesFile.text}>
        {file_name}.{file_extension}
      </Typography>
    </div>
  );
};

export default UploadedFile;
