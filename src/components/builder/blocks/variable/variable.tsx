import { FC, useMemo } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
import { v4 as uuidv4 } from 'uuid';
import {
  TBlockProps,
  TVariablesControlBlock,
} from '../../../../services/types/builder';
import ConstructorAddButton from '../../../../ui/buttons/constructor-add-button/constructor-add-button';
import ControlLayout from '../../control-layout/control-layout';
import styleVariableBlock from './variable.module.scss';
import Value from './value/value';

const VariableBlockNode: FC<TBlockProps<TVariablesControlBlock>> = ({
  data,
}) => {
  const content = useMemo(() => data.variables, [data]);

  const { getNodes, setNodes } = useReactFlow();
  const id = useNodeId();

  const addField = () => {
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
                  id: uuidv4(),
                  variable: '',
                  value: '',
                },
              ],
            },
          };
        }
        return item;
      })
    );
  };

  return (
    <ControlLayout type="Управление переменными">
      <div className={styleVariableBlock.container}>
        {content.map((item) => {
          return <Value idNum={item.id} key={item.id} />;
        })}
        <div className={styleVariableBlock.field}>
          <ConstructorAddButton
            buttonHtmlType="button"
            disabled={false}
            onClick={addField}
          >
            Добавить переменную
          </ConstructorAddButton>
        </div>
      </div>
    </ControlLayout>
  );
};

export default VariableBlockNode;
