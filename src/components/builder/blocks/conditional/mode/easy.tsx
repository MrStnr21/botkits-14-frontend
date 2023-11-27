import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';

import styles from './mode.module.scss';
import { selectValues, signSelectValues } from '../../../utils/data';
// import { TVariable } from '../../../../../services/types/builder';
import Input from '../../../../../ui/inputs/input/input';
import MenumenuSelectFlow from '../../../../../ui/menus/menu-select-flow/menu-select-flow';

export type TEasyBlockProps = {
  id: string;
};
const EasyMode: FC<TEasyBlockProps> = ({ id }) => {
  const buttonsSignSelect = signSelectValues.map((item) => item.nameValue);
  const buttonsSelectValues = selectValues.map((item) => item.nameValue);
  const { getNodes, setNodes } = useReactFlow();
  const idNode = useNodeId();

  const node = getNodes().find((item) => item.id === idNode);

  const itemVariables = () =>
    node && node.data.variables.find((item: { id: string }) => item.id === id);

  const setItemVariables = (key: string, value: any) => {
    itemVariables()[key] = value;

    setNodes(
      getNodes().map((item) => {
        if (item.id === id) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: [
                ...item.data.variables,
                {
                  itemVariables,
                },
              ],
            },
          };
        }
        return item;
      })
    );
  };

  const setCondition = (value: any) => setItemVariables('condition', value);

  const setVariable = (value: any) => setItemVariables('variable', value);

  const setSign = (value: any) => setItemVariables('sign', value);

  const active = useMemo(
    () =>
      itemVariables().variable &&
      Object.values(itemVariables().variable)[0] !== '',
    [itemVariables().variable]
  );

  return (
    <div className={styles['labeled-content']}>
      <div className={styles['selects-string']}>
        <div className={styles.selectsVariable}>
          <MenumenuSelectFlow
            width="184"
            buttons={buttonsSelectValues}
            nameMenu={
              (itemVariables().variable &&
                Object.values(itemVariables().variable)[0]) ||
              'Переменная'
            }
            onClick={(name: string) => {
              setVariable({ key: name });
            }}
            active={active}
          />
        </div>
        <div className={styles.selectsIcon}>
          <MenumenuSelectFlow
            width="52"
            buttons={buttonsSignSelect}
            nameMenu={itemVariables().sign || buttonsSignSelect[0]}
            onClick={(name: string) => {
              setSign(name);
            }}
            active
            isIcon
          />
        </div>
      </div>
      <Input
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setCondition(event.target.value)
        }
        styled="bot-builder-default"
        placeholder="Значение"
        value={itemVariables().condition}
      />
    </div>
  );
};

export default EasyMode;
