import { FC } from 'react';
import UploadedFile from '../UploadedFile/UploadedFile';
import UploadedImage from '../UploadedImage/UploadedImage';
import ButtonNotBackground from '../../../ui/buttons/button-not-background/button-not-background';
import { dataFile, dataImage } from '../../../utils/uploadedFiles';
import stylesFiles from './Files.module.scss';
import Typography from '../../../ui/typography/typography';

const Files: FC = (): JSX.Element => {
  return (
    <div>
      {dataFile && dataImage ? (
        <div className={stylesFiles.files}>
          <Typography tag="p" className={stylesFiles.files__paragraph}>
            Загруженные файлы
          </Typography>
          <div>
            <ButtonNotBackground>Все</ButtonNotBackground>
          </div>
          <div className={stylesFiles.files__itemColumn}>
            {dataFile?.map((value: any) => (
              <UploadedFile
                file_name={value.name}
                file_extension={value.extension}
              />
            ))}
          </div>
          <Typography tag="p" className={stylesFiles.files__paragraph}>
            Изображения
          </Typography>
          <div>
            <ButtonNotBackground>Все</ButtonNotBackground>
          </div>
          <div className={stylesFiles.files__itemRow}>
            {dataImage?.map((value: any) => <UploadedImage image={value} />)}
          </div>
        </div>
      ) : (
        <div className={stylesFiles.files__information}>
          <Typography tag="p" className={stylesFiles.files__text}>
            У вас пока нет загруженных файлов
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Files;
