import React, { FC } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import styles from './value.module.scss';
import Equal from '../../../../icons/Equal/Equal';
import Input from '../../../../../ui/inputs/input/input';
import { selectValues } from '../../../utils/data';
import Select from '../../../../../ui/select/select';
import { Option } from '../../../../../utils/types';
import { getSelectItemByValue } from '../../../utils';

export type TValueProps = {
  idNum: string;
};

const Value: FC<TValueProps> = ({ idNum }) => {
  const { getNodes, setNodes, getNode } = useReactFlow();
  const id = useNodeId();
  const node = getNode(id!);

  const itemLine = node!.data.variables.find(
    (el: { id: string }) => el.id === idNum
  );

  const setItemValues = (key: string, value: any) => {
    itemLine[key] = value;

    setNodes(
      getNodes().map((el) => {
        if (el.id === id) {
          return {
            ...el,
            data: {
              ...el.data,
              variables: [...el.data.variables],
            },
          };
        }
        return el;
      })
    );
  };

  const setVar = (value: any) => setItemValues('variable', value);

  const setVal = (option: Option) => setItemValues('value', option.value);

  return (
    <div className={styles.overlay}>
      <div className={styles.input}>
        <Input
          placeholder="Переменная"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVar(e.target.value)
          }
          value={itemLine.variable}
          type="text"
          styled="bot-builder-default"
          textColor="default"
          minLength={1}
        />
      </div>
      <div className={styles.box}>
        <Equal />
      </div>
      <div className={styles.v}>
        <Select
          options={selectValues}
          currentOption={getSelectItemByValue(itemLine.value, selectValues)}
          handleSelect={setVal}
          placeholder="переменная"
          elementToCloseListener="flow"
          adaptive
        />
      </div>
    </div>
  );
};

export default Value;
