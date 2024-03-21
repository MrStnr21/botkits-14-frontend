import { FC } from 'react';
import { ReactComponent as DocImage } from '../../../../../../images/icon/add content/doc-circle.svg';
import { ReactComponent as DocErrorImage } from '../../../../../../images/icon/add content/doc-error.svg';
import styles from '../file.module.scss';
import { sizeFormated } from '../../../../../../utils/utils';

export type TUploadedDockProps = {
  blob: Blob;
  fileName?: string;
  onRemove: () => void;
};

const UploadedDock: FC<TUploadedDockProps> = ({ blob, fileName, onRemove }) => {
  const isRequired = blob.size <= 1024 * 1024 * 10;
  const Icon = isRequired ? DocImage : DocErrorImage;
  return (
    <div className={`${styles.result} ${!isRequired && styles.result_error}`}>
      <Icon className={styles.result__icon} />
      <p className={styles.result__name}>{fileName}</p>
      <p className={styles.result__size}>{sizeFormated(blob.size)}</p>
      <button
        type="button"
        aria-label="Удалить файл"
        className={styles.result__button}
        onClick={onRemove}
      />
    </div>
  );
};

export default UploadedDock;
