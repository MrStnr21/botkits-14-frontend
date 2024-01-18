import { FC, useState } from 'react';

import styles from './popup.module.scss';

import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';

export interface IFormPopup {
  title: string;
  placeholder: string;
  buttonText: string;
  value: string;
  onCancel: () => void;
  onConfirm: (value: string) => void;
  inputType?: string;
}

const FormPopup: FC<IFormPopup> = ({
  title,
  placeholder,
  buttonText,
  value = '',
  onCancel,
  onConfirm,
  inputType,
}) => {
  const [inputValue, setInputValue] = useState(value);

  return (
    <div className={styles.container}>
      <Typography tag="h3" fontFamily="secondary">
        {title}
      </Typography>
      {/* TODO валидация и disable кнопки подтверждения */}
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={placeholder}
        type={inputType}
        required
      />

      <div className={styles.buttons}>
        <button className={styles.cancel} type="button" onClick={onCancel}>
          Отмена
        </button>
        <div className={styles.submit}>
          <Button
            onClick={() => onConfirm(inputValue)}
            size="medium"
            variant="default"
            color="blue"
            buttonHtmlType="submit"
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormPopup;
