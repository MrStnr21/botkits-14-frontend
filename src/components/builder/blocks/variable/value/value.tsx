import React, { FC } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import styles from './value.module.scss';
import Equal from '../../../../icons/Equal/Equal';
import Input from '../../../../../ui/inputs/input/input';
import { selectValues } from '../../../utils/data';
import MenumenuSelectFlow from '../../../../../ui/menus/menu-select-flow/menu-select-flow';

export type TValueProps = {
  idNum: string;
};

const Value: FC<TValueProps> = ({ idNum }) => {
  const selectOptions = selectValues.map((el) => el.nameValue);

  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();
  const node = getNodes().find((el) => el.id === id);

  const itemVariables = (idItem: string) =>
    node && node.data.variables.find((el: { id: string }) => el.id === idItem);

  const setItemVariables = (idItem: string, key: string, value: any) => {
    itemVariables(idItem)[key] = value;

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

  const setVar = (idItem: string, value: any) =>
    setItemVariables(idItem, 'variable', value);

  const setVal = (idItem: string, value: any) =>
    setItemVariables(idItem, 'value', value);

  return (
    <div className={styles.overlay}>
      <Input
        placeholder="Переменная"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setVar(idNum, e.target.value)
        }
        type="text"
        styled="bot-builder-default"
        textColor="default"
      />
      <div className={styles.box}>
        <Equal />
      </div>
      <div className={styles.v}>
        <MenumenuSelectFlow
          buttons={selectOptions}
          nameMenu={selectOptions[0]}
          onClick={(name: string) => setVal(idNum, name)}
          active
        />
      </div>
    </div>
  );
};

export default Value;
