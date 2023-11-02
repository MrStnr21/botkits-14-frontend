import { FC } from 'react';
import UploadedFile from '../UploadedFile/UploadedFile';
import UploadedImage from '../UploadedImage/UploadedImage';
import ButtonNotBackground from '../../../ui/buttons/button-not-background/button-not-background';
import { dataFile, dataImage } from '../../../utils/uploadedFiles';
import stylesFiles from './Files.module.scss';

const Files: FC = (): JSX.Element => {
  return (
    <div>
      {dataFile && dataImage ? (
        <div className={stylesFiles.files}>
          <p className={stylesFiles.paragraph}>Загруженные файлы</p>
          <div>
            <ButtonNotBackground>Все</ButtonNotBackground>
          </div>
          <div className={stylesFiles.itemColumn}>
            {dataFile.map((value) => (
              <UploadedFile
                file_name={value.name}
                file_extension={value.extension}
              />
            ))}
          </div>
          <p className={stylesFiles.paragraph}> Изображения </p>
          <div>
            <ButtonNotBackground>Все</ButtonNotBackground>
          </div>
          <div className={stylesFiles.itemRow}>
            {dataImage.map((value) => (
              <UploadedImage image={value} />
            ))}
          </div>
        </div>
      ) : (
        <div className={stylesFiles.information}>
          <p className={stylesFiles.text}>У вас пока нет загруженных файлов</p>
        </div>
      )}
    </div>
  );
};

export default Files;
