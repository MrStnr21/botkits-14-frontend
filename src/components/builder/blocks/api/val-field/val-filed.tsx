import React, { FC } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import Input from '../../../../../ui/inputs/input/input';
import styles from './val-field.module.scss';

type TValField = {
  name: string;
  value: string;
  index: number;
  field: 'headers' | 'params';
};

const ValField: FC<TValField> = ({ name, value, index, field }) => {
  const { setNodes, getNodes } = useReactFlow();
  const id = useNodeId();

  const setValue =
    (type: 'name' | 'variable') => (e: React.ChangeEvent<HTMLInputElement>) => {
      setNodes(
        getNodes().map((item) => {
          if (item.id === id) {
            return {
              ...item,
              data: {
                ...item.data,
                [field]: [
                  ...item.data[field].slice(0, index),
                  { ...item.data[field][index], [type]: e.target.value },
                  ...item.data[field].slice(index + 1),
                ],
              },
            };
          }
          return item;
        })
      );
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
