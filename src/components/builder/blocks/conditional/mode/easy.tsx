import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';

import styles from './mode.module.scss';
import { selectValues, signSelectValues } from '../../../utils/data';
import Input from '../../../../../ui/inputs/input/input';
import Select from '../../../../../ui/select/select';
import { getSelectItemByValue } from '../../../utils';
import { setItemVariablesFlow } from '../flow';

export type TEasyBlockProps = {
  id: string;
};

/**
 * компонент-подблок для  взаимодействия с переменной, уникальная для простого режима часть
 */
const EasyMode: FC<TEasyBlockProps> = ({ id }) => {
  const { getNode } = useReactFlow();
  const idNode = useNodeId() || '';
  const node = getNode(idNode);

  const itemFromVariables = useMemo(
    () =>
      node &&
      node.data.variables.filter((item: { id: string }) => item.id === id)[0],
    [node]
  );

  const setItemVariables = setItemVariablesFlow();

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
