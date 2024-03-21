import { FC, useState } from 'react';

import stylesAddfile from './add-file.module.scss';

import { ReactComponent as Upload } from '../../../images/icon/24x24/common/upload.svg';

import { SIZE_INPUT } from '../../../utils/constants';
import Typography from '../../typography/typography';

interface IDownloadFile {
  size?: SIZE_INPUT;
  state?: boolean; // добавила для сторибука
}

const DownloadFile: FC<IDownloadFile> = ({ size, state = false }) => {
  const [isNoValid, setIsNoValid] = useState(state);

  const handleChange = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    if (target.files!.length > 0) {
      if (target.files![0].size > 20 * 1024 * 1024) {
        setIsNoValid(true);
      }
    }
  };

  return (
    <div
      className={`${stylesAddfile.download} ${
        isNoValid ? stylesAddfile.download_error : ''
      }`}
      style={size ? { width: size } : {}}
    >
      <input
        className={stylesAddfile.download__input}
        type="file"
        onChange={handleChange}
        id="file-input-button"
        name="file"
        hidden
      />
      <label
        className={stylesAddfile.download__label}
        htmlFor="file-input-button"
      >
        <Upload className={stylesAddfile.download__icon} />
        <Typography tag="span" className={stylesAddfile.download__text}>
          Загрузить файл
        </Typography>
      </label>
      <Typography tag="span" className={stylesAddfile.textError}>
        Размер файла не должен превышать 20 Мб
      </Typography>
    </div>
  );
};

export default DownloadFile;
