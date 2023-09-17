import { ChangeEvent, useState } from 'react';

function useForm(inputValues: any) {
  const [values, setValues] = useState(inputValues);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  return {
    values,
    handleChange,
    setValues,
  };
}

export default useForm;
