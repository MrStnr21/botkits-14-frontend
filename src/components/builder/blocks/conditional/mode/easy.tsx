import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';

import styles from './mode.module.scss';
import { selectValues, signSelectValues } from '../../../utils/data';
import Input from '../../../../../ui/inputs/input/input';
import Select from '../../../../../ui/select/select';
import { getSelectItemByValue } from '../../../utils';

export type TEasyBlockProps = {
  id: string;
};
const EasyMode: FC<TEasyBlockProps> = ({ id }) => {
  const { getNodes, setNodes, getNode } = useReactFlow();
  const idNode = useNodeId() || '';
  const node = getNode(idNode);

  const itemFromVariables = useMemo(
    () =>
      node &&
      node.data.variables.filter((item: { id: string }) => item.id === id)[0],
    [node]
  );

  const setItemVariables = (
    idItem: string,
    key: 'id' | 'type' | 'variable' | 'sign' | 'condition' | 'targetBlock',
    value: any
  ) => {
    setNodes(
      getNodes().map((item) => {
        if (item.id === idNode) {
          return {
            ...item,
            data: {
              ...item.data,
              variables:
                node &&
                node.data.variables.map(
                  (elem: { [x: string]: any; id: string }) => {
                    if (elem.id === idItem) {
                      // eslint-disable-next-line no-param-reassign
                      elem[key] = value;
                    }
                    return elem;
                  }
                ),
            },
          };
        }
        return item;
      })
    );
  };

  const setCondition = (value: any) => {
    setItemVariables(id, 'condition', value);
  };

  const setVariable = (value: any) => setItemVariables(id, 'variable', value);

  const setSign = (value: any) => setItemVariables(id, 'sign', value);

  const content = useMemo(
    () => (
      <>
        <div className={styles['selects-string']}>
          <div className={styles.selectsVariable}>
            <Select
              options={selectValues}
              handleSelect={(option) => setVariable(option.value)}
              currentOption={getSelectItemByValue(
                itemFromVariables.variable,
                selectValues
              )}
              elementToCloseListener="flow"
              adaptive
            />
          </div>
          <div className={styles.selectsIcon}>
            <Select
              options={signSelectValues}
              handleSelect={(option) => setSign(option.value)}
              currentOption={
                getSelectItemByValue(
                  itemFromVariables.sign,
                  signSelectValues
                ) || signSelectValues[0]
              }
              layoutClassName={styles.selectLayout}
              itemClassName={styles.selectItem}
              elementToCloseListener="flow"
              adaptive
            />
          </div>
        </div>
        <Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setCondition(event.target.value)
          }
          styled="bot-builder-default"
          placeholder="Значение"
          value={itemFromVariables.condition}
          minLength={0}
          required={false}
        />
      </>
    ),
    [node]
  );

  return <div className={styles['labeled-content']}>{content}</div>;
};

export default EasyMode;
