import { FC } from 'react';
import UploadedFile from '../UploadedFile/UploadedFile';
import UploadedImage from '../UploadedImage/UploadedImage';
import { dataFile, dataImage } from '../../../utils/uploadedFiles';
import styles from './Files.module.scss';
import Typography from '../../../ui/typography/typography';
import ButtonBasic from '../../../ui/buttons/button-basic/button-basic';

const Files: FC = () => {
  return (
    <div>
      {dataFile && dataImage ? (
        <div className={styles.files}>
          <Typography tag="p" className={styles.files__paragraph}>
            Загруженные файлы
          </Typography>
          <ButtonBasic btnStyle={styles.button}>Все</ButtonBasic>
          <div className={styles.files__itemColumn}>
            {dataFile?.map((value: any) => (
              <UploadedFile
                file_name={value.name}
                file_extension={value.extension}
              />
            ))}
          </div>
          <Typography tag="p" className={styles.files__paragraph}>
            Изображения
          </Typography>
          <div>
            <ButtonBasic btnStyle={styles.button}>Все</ButtonBasic>
          </div>
          <div className={styles.files__itemRow}>
            {dataImage?.map((value: any) => <UploadedImage image={value} />)}
          </div>
        </div>
      ) : (
        <div className={styles.files__information}>
          <Typography tag="p" className={styles.files__text}>
            У вас пока нет загруженных файлов
          </Typography>
        </div>
      )}
    </div>
  );
};

export default Files;
