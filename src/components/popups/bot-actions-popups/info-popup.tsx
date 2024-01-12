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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleCopy = (_text: never, isSuccess: boolean) => {
    if (isSuccess) {
      setStatus('success');
    } else setStatus('error');
    // setTimeout(() => {
    //   setCopied(false);
    // }, 2000);
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
      {status === 'success' && (
        <Typography tag="p" className={styles.copied}>
          {successCopyText}
        </Typography>
      )}
    </div>
  );
};

export default InfoPopup;
