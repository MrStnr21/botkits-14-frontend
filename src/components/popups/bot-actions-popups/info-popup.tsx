import { FC, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from './popup.module.scss';

import Typography from '../../../ui/typography/typography';
import ButtonIconCopy from '../../../ui/buttons/button-icon-copy/button-icon-copy';

export type InfoUnit = {
  title: string;
  value: string;
  toCopy: boolean;
};
export interface IInfoPopup {
  title: string;
  info: InfoUnit[];
  successCopyText: string;
}

const InfoPopup: FC<IInfoPopup> = ({ title, info, successCopyText }) => {
  const [status, setStatus] = useState<'success' | 'notRequested' | 'error'>(
    'notRequested'
  );
  const [copyTimeoutId, setCopyTimeoutId] = useState<NodeJS.Timeout | null>(
    null
  );
  const [animationKey, setAnimationKey] = useState(0);

  const handleCopy = (_text: never, isSuccess: boolean) => {
    setStatus('notRequested');
    if (copyTimeoutId) {
      clearTimeout(copyTimeoutId);
    }
    if (isSuccess) {
      setStatus('success');
      setAnimationKey((prevKey) => prevKey + 1);
      const newTimeoutId = setTimeout(() => {
        setStatus('notRequested');
      }, 2000);
      setCopyTimeoutId(newTimeoutId);
    } else setStatus('error');
  };

  return (
    <div className={`${styles.container} ${styles.wide}`}>
      <Typography tag="h3" fontFamily="secondary">
        {title}
      </Typography>
      {info.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div className={styles.copy_section} key={index}>
          <div>
            <Typography tag="span" className={styles.title}>
              {item.title}
            </Typography>
            <Typography tag="p" className={styles.value}>
              {item.value}
            </Typography>
          </div>
          {item.toCopy && (
            <CopyToClipboard text={item.value} onCopy={handleCopy}>
              <ButtonIconCopy />
            </CopyToClipboard>
          )}
        </div>
      ))}
      {status !== 'notRequested' && (
        <Typography tag="p" className={styles.copied} key={animationKey}>
          {status === 'success'
            ? `${successCopyText}`
            : 'Ошибка при копировании'}
        </Typography>
      )}
    </div>
  );
};

export default InfoPopup;
