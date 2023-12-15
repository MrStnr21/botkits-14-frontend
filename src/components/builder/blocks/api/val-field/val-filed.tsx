import React, { FC } from 'react';
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
  const { setNodes, getNodes } = useReactFlow();
  const id = useNodeId() || '';

  const setValue = setValueFlow({ setNodes, getNodes, id, index, field });
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
