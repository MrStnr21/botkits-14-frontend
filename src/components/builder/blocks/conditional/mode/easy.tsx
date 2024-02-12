import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';

import styles from './mode.module.scss';
import { signSelectValues } from '../../../utils/data';
import { storeOfVariables } from '../../../utils/store';
import Input from '../../../../../ui/inputs/input/input';
import Select from '../../../../../ui/select/select';
import {
  getSelectItemByValue,
  setFlowDataInit,
  getSelectLabel,
} from '../../../utils';

export type TEasyBlockProps = {
  id: string;
  index: number;
};

/**
 * компонент-подблок для  взаимодействия с переменной, уникальная для простого режима часть
 */
const EasyMode: FC<TEasyBlockProps> = ({ id, index }) => {
  const setFlowData = setFlowDataInit();
  const { getNode } = useReactFlow();
  const idNode = useNodeId() || '';
  const node = getNode(idNode);

  const itemFromVariables = useMemo(
    () =>
      node &&
      node.data.variables.filter((item: { id: string }) => item.id === id)[0],
    [node]
  );

  const setCondition = (value: string) => {
    setFlowData({
      path: ['data', 'variables', index.toString(), 'condition'],
      value,
    });
  };

  const setVariable = (value: string) =>
    setFlowData({
      path: ['data', 'variables', index.toString(), 'variable'],
      value,
    });

  const setSign = (value: string) =>
    setFlowData({
      path: ['data', 'variables', index.toString(), 'sign'],
      value,
    });

  const content = useMemo(
    () => (
      <>
        <div className={styles.selects}>
          <div className={styles.variable}>
            <Select
              options={getSelectLabel(storeOfVariables)}
              handleSelect={(option) => setVariable(option.value)}
              currentOption={getSelectItemByValue(
                itemFromVariables.variable,
                getSelectLabel(storeOfVariables)
              )}
              elementToCloseListener="flow"
              adaptive
            />
          </div>
          <div className={styles.comparison}>
            <Select
              options={signSelectValues}
              handleSelect={(option) => setSign(option.value)}
              currentOption={
                getSelectItemByValue(
                  itemFromVariables.sign,
                  signSelectValues
                ) || signSelectValues[0]
              }
              layoutClassName={styles.select_layout}
              itemClassName={styles.select_item}
              iconClassName={styles.select_item__icon}
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
