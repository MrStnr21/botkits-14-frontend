import { ChangeEvent, useState } from 'react';

/**
 * хук для добавления отслеживания состояния формы
 * @param inputValues объект с полями формата: `name: { value: string, isValid: boolean }`, где name это атрибут tag инпута
 */
function useForm(inputValues: any) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: { value, valueValid: event.target.validity.valid },
    });
  };
  return {
    values,
    handleChange,
    setValues,
  };
}

export default useForm;
