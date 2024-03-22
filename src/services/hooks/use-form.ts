import { ChangeEvent, useEffect, useState } from 'react';

export type TInputValue<T extends string | number = string | number> = {
  value: T;
  isValid?: boolean | undefined;
};
export type TFormValues = Record<string, TInputValue>;

/**
 * хук для добавления отслеживания состояния формы
 * @param inputValues объект с полями формата: `name: { value: string, isValid: boolean }`, где name это атрибут tag инпута
 */
function useForm<T extends TFormValues>(inputValues: T) {
  const [values, setValues] = useState<T>(inputValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(true);

  useEffect(() => {
    setIsFormValid(Object.values(values).every((field) => field.isValid));
  }, [values]);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    const isValid = event.target.validity.valid;

    setValues({
      ...values,
      [name]: { value, isValid },
    });
    console.log(values);
  };

  return {
    values,
    isFormValid,
    handleChange,
    setValues,
  };
}

export default useForm;
