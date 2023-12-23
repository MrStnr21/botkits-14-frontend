import React, { FC, useState } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import Input from '../../../../../ui/inputs/input/input';
import styles from './val-field.module.scss';
import { setValueFlow } from '../flow';

type TValField = {
  name: string;
  value: string;
  index: number;
  field: 'headers' | 'params';
};

const ValField: FC<TValField> = ({ name, value, index, field }) => {
  const [amount, render] = useState(0);
  const { getNodes } = useReactFlow();
  const id = useNodeId() || '';

  const setValue = setValueFlow({ getNodes, id, index, field });

  return (
    <form className={styles.form}>
      <Input
        styled="bot-builder-default"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue('name', event);
          render(amount + 1);
        }}
        placeholder="Название"
        value={name}
        minLength={0}
      />
      <Input
        styled="bot-builder-default"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          setValue('variable', event);
          render(amount + 1);
        }}
        placeholder="Переменная"
        value={value}
        minLength={0}
      />
    </form>
  );
};

export default ValField;
