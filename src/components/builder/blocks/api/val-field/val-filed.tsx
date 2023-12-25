import React, { FC } from 'react';
import Input from '../../../../../ui/inputs/input/input';
import styles from './val-field.module.scss';
import { setFlowDataInit } from '../../../utils';

type TValField = {
  name: string;
  value: string;
  index: number;
  field: 'headers' | 'params';
};

const ValField: FC<TValField> = ({ name, value, index, field }) => {
  const setFlowData = setFlowDataInit();
  const setValue =
    (type: 'name' | 'variable') => (e: React.ChangeEvent<HTMLInputElement>) => {
      setFlowData({
        path: ['data', field, index.toString(), type],
        value: e.target.value,
      });
    };
  return (
    <form className={styles.form}>
      <Input
        styled="bot-builder-default"
        onChange={setValue('name')}
        placeholder="Название"
        value={name}
        minLength={0}
      />
      <Input
        styled="bot-builder-default"
        onChange={setValue('variable')}
        placeholder="Переменная"
        value={value}
        minLength={0}
      />
    </form>
  );
};

export default ValField;
