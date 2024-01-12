import { FC, useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';

import styles from './popup.module.scss';

import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';

export interface ILinkPopup {
  title: string;
  placeholder: string;
  link: string;
}

const LinkPopup: FC<ILinkPopup> = ({ title, placeholder, link = '' }) => {
  const [inputValue, setInputValue] = useState(link);
  const [status, setStatus] = useState<'success' | 'notRequested' | 'error'>(
    'notRequested'
  );

  const handleCopy = (_text: never, isSuccess: boolean) => {
    if (isSuccess) {
      setStatus('success');
    } else setStatus('error');
  };

  return (
    <div className={styles.container}>
      <Typography tag="h3" fontFamily="secondary">
        {title}
      </Typography>
      <Input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
          setStatus('notRequested');
        }}
        placeholder={placeholder}
        type="url"
      />
      <CopyToClipboard text={inputValue} onCopy={handleCopy}>
        <Button
          size="medium"
          variant="default"
          color="grey"
          buttonHtmlType="submit"
        >
          {status === 'success' ? 'Ссылка скопирована' : 'Скопировать ссылку'}
        </Button>
      </CopyToClipboard>
      {status === 'success' && (
        <Typography tag="p" className={styles.copied}>
          Ссылка скопирована
        </Typography>
      )}
      {status === 'error' && (
        <Typography tag="p" className={styles.copied}>
          Ошибка при копировании
        </Typography>
      )}
    </div>
  );
};

export default LinkPopup;
