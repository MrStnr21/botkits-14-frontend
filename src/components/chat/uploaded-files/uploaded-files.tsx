import { FC } from 'react';
import icon from '../../../images/icon/add content/doc-circle.svg';
import stylesFilers from './uploaded-files.module.scss';

interface IUploadedFiles {
  file_name: string;
  file_extension: string;
}

const UploadedFiles: FC<IUploadedFiles> = ({
  file_name = 'Инфо',
  file_extension = 'pdf',
}): JSX.Element => {
  return (
    <div className={stylesFilers.container}>
      <img src={icon} alt="иконка" />
      <p className={stylesFilers.text}>
        {file_name}.{file_extension}
      </p>
    </div>
  );
};

export default UploadedFiles;
