import { FC, FormEvent } from 'react';

import styles from './popup.module.scss';

import Button from '../../../ui/buttons/button/button';
import Input from '../../../ui/inputs/input/input';
import Typography from '../../../ui/typography/typography';
import useForm, { TInputValue } from '../../../services/hooks/use-form';

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
  const { values, handleChange, isFormValid } = useForm<{
    formValue: TInputValue;
  }>({
    formValue: { value, isValid: true },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>, formValue: string) => {
    e.preventDefault();
    if (values.formValue.isValid) {
      onConfirm(formValue);
    }
  };

  return (
    <form
      className={styles.container}
      onSubmit={(e) => handleSubmit(e, values.formValue.value as string)}
    >
      <Typography tag="h3" fontFamily="secondary">
        {title}
      </Typography>
      {/* TODO валидация и disable кнопки подтверждения */}
      <Input
        name="formValue"
        value={values.formValue.value}
        onChange={handleChange}
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
            size="medium"
            variant="default"
            color="blue"
            buttonHtmlType="submit"
            disabled={!isFormValid}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormPopup;
