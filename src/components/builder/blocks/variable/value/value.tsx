import React, { FC } from 'react';
import styles from './value.module.scss';
import Equal from '../../../../../ui/icons/Equal/Equal';
import Input from '../../../../../ui/inputs/input/input';
import { storeOfVariables } from '../../../utils/store';
import Select from '../../../../../ui/select/select';
import { Option } from '../../../../../utils/types';
import {
  getSelectItemByValue,
  setFlowDataInit,
  getSelectLabel,
} from '../../../utils/index';

export type TValueProps = {
  idNum: string;
  item: {
    id: string;
    variable: string;
    value: string;
  };
};

const Value: FC<TValueProps> = ({ idNum, item }) => {
  const setItemValues = setFlowDataInit();

  const setVar = (value: string) =>
    setItemValues({
      path: ['data', 'variables', idNum, 'variable'],
      value,
    });

  const setVal = (option: Option) =>
    setItemValues({
      path: ['data', 'variables', idNum, 'value'],
      value: option.value,
    });

  return (
    <div className={styles.overlay}>
      <div className={styles.input}>
        <Input
          placeholder="Переменная"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setVar(e.target.value)
          }
          value={item.variable}
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
          options={getSelectLabel(storeOfVariables)}
          currentOption={getSelectItemByValue(
            item.value,
            getSelectLabel(storeOfVariables)
          )}
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
