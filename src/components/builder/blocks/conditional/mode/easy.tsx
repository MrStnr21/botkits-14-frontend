import { FC, useMemo, useState } from 'react';
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
  const [input, setInput] = useState(false);
  const buttonsSignSelect = signSelectValues.map((item) => item.nameValue);
  const buttonsSelectValues = selectValues.map((item) => item.nameValue);
  const { getNodes, setNodes } = useReactFlow();
  const idNode = useNodeId();
  const nodes = getNodes();
  const node = nodes.filter((el) => el.id === idNode)[0];

  const itemVariables = () =>
    node && node.data.variables.find((item: { id: string }) => item.id === id);

  const setItemVariables = (
    idItem: string,
    key: 'id' | 'type' | 'variable' | 'sign' | 'condition' | 'targetBlock',
    value: any
  ) => {
    // itemFromVariables(idItem)[key] = value;

    setNodes(
      getNodes().map((item) => {
        if (item.id === idNode) {
          return {
            ...item,
            data: {
              ...item.data,
              variables: node.data.variables.map(
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
    setInput(!input);
  };

  const setVariable = (value: any) => setItemVariables(id, 'variable', value);

  const setSign = (value: any) => setItemVariables(id, 'sign', value);

  const active = useMemo(
    () =>
      itemVariables().variable &&
      Object.values(itemVariables().variable)[0] !== '',
    [itemVariables().variable]
  );

  const content = useMemo(
    () => (
      <>
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
          minLength={0}
          required={false}
        />
      </>
    ),
    [node, input]
  );

  return <div className={styles['labeled-content']}>{content}</div>;
};

export default EasyMode;
