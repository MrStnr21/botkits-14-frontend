import { FC, useMemo, useState } from 'react';
import { useReactFlow, useNodeId } from 'reactflow';
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

  const [num, setNum] = useState(0);

  console.log(data);

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
                  id: num + 1,
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
    setNum(num + 1);
  };

  return (
    <ControlLayout type="Управление переменными">
      <div className={styleVariableBlock.container}>
        {content.map((item) => {
          return <Value idNum={item.id} />;
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
