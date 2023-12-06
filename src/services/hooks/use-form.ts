import { ChangeEvent, useState } from 'react';

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
